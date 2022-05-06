import { IExercice } from "../../../models"

interface Props {
	result: IExercice
}

const ExerciseContent: React.FC<Props> = ({ result }) => {
	return <div>{result.question}</div>
}

export default ExerciseContent