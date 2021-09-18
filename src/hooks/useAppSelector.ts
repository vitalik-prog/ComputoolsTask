import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState } from '../common/types'

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export { useAppSelector }
