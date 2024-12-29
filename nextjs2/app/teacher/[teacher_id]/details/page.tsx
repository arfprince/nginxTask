import React from 'react'

export default function page({params}) {
    const {teacher_id} = params || {};
  return (
    <div>
        frontend2 teacher/teacher_id/details
        <h1>
            teacher_id is : {teacher_id} 
        </h1>
    </div>
  )
}
