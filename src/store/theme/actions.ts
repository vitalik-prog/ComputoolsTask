import { createAction } from '@reduxjs/toolkit'
import { ActionType } from './common'

const changeTheme = createAction(ActionType.CHANGE_THEME)

export { changeTheme }
