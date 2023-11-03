
import Icon, { IconName } from '../Icon/Icon'

interface Props {
  icon?: IconName
  message: string
}

export const FormError = (props: Props) => {
  return (
    <div role="alert" className='text-sm  min-h-[25px] flex items-center text-[#FFE0ED] py-2'>
      {props.icon && <Icon name={props.icon} size={16} />}
      <p className='font-normal leading-5 mb-0 ml-1 pt-[1px] w-full'>
        {props.message}
      </p>
    </div>
  )
}

export default FormError
