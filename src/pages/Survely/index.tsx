
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '@/utils/style/color'
import { Loader } from '@/utils/style/Atoms'
import { useFetch } from '@/utils/hooks'


const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`

const QuestionContent = styled.span`
  margin: 30px;
`

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`

function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1
/*   const [surveyData, setSurveyData] = useState({})
  const [isDataLoading, setDataLoading] = useState(false) */
/*   const [error, setError] = useState(false)
 */
/*   useEffect(() => {
    async function fetchSurvey() {
      setDataLoading(true)
      try {
        const response = await fetch(`http://localhost:8000/survey`)
        const { surveyData } = await response.json()
        setSurveyData(surveyData)
      } catch (err) {
        console.log('===== error =====', err)
        setError(true)
      } finally {
        setDataLoading(false)
      }
    }
    fetchSurvey()
  }, [])
 */

 const { data, isLoading, error } = useFetch(`http://localhost:8000/survey`)

const surveyData = data?.surveyData
console.log(surveyData);

if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  return (
     <SurveyContainer>
       <QuestionTitle>Question {questionNumber}</QuestionTitle>
       {isLoading ? (
         <Loader />
       ) : surveyData && surveyData[questionNumber] ? ( // Vérifier si surveyData et la question sont disponibles
         <QuestionContent>{surveyData[questionNumber]}</QuestionContent>
       ) : (
         <span>La question n'existe pas ou les données ne sont pas encore disponibles.</span>
       )}
       <LinkWrapper>
         <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
         {surveyData && surveyData[questionNumberInt + 1] ? (
           <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
         ) : (
           <Link to="/results">Résultats</Link>
         )}
       </LinkWrapper>
     </SurveyContainer>
   )
   
}

export default Survey
