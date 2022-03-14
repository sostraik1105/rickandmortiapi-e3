import { generalId } from '../helpers/locationHelpers'
import { Residents } from './Residents'

export const ResidentsList = ({charList}) => {

    return (
<<<<<<< HEAD
        <div>
=======
        <div className='card'>
>>>>>>> 47a3fd8deae5f41cdad5e94fe0eeb0fbb3c6b4c7
            {
                charList?.map(el=>(
                    <Residents 
                        url={el}
                        key={generalId(el)}
                        />
                ))
            }
        </div>
    )
}
