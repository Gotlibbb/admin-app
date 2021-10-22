import React from 'react'
import { LineTableComponent } from '../LineTableComponent'
import { UserType } from '../../../api/api'

interface LineRowsPropsType {
  user: UserType
  setUpdateModalActive: (v: boolean) => void
  setDeleteModalActive: (v: boolean) => void
  setCurrentUserId: (id: string) => void
}

const LineRows = React.memo((props: LineRowsPropsType) => {
  return (
    <LineTableComponent
      user={props.user}
      setUpdateModalActive={props.setUpdateModalActive}
      setDeleteModalActive={props.setDeleteModalActive}
      setCurrentUserId={props.setCurrentUserId}/>
  )
})

export default LineRows