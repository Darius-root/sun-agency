import DefaultPicture from '@/assets/react.svg'
import Card from '@/components/Card' // Assurez-vous que Card est bien importé

const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Développeur frontend',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    },
]

function Freelances() {
    return (
        <div>
            {freelanceProfiles.map((profile, index) => (
                <Card  key={`${profile.name}-${index}`}
                label={profile.jobTitle}
                picture={profile.picture}
                title={profile.name} 
                 />
            ))}
        </div>
    )
}

export default Freelances
