import {CrewList, CrewImage, CrewName, CrewActorName} from './styled'

const CrewCard = props => {
    const {eachCrew} = props
    const {name, actorName, thumbnailURL} = eachCrew

    return(
        <CrewList>
            <CrewImage src={thumbnailURL} alt={name} />
            <CrewName>{name}</CrewName>
            <CrewActorName>({actorName})</CrewActorName>
        </CrewList>
    )
}

export default CrewCard