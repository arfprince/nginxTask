import React from 'react'

export default function page({params}) {
    const {teacher_id, subject_id} = params || {};
  return (
    
    <div>
        frontend2 teacher/teacher_id/subject_id 
        <h1>
            the teacher id is: {teacher_id}
        </h1>
        <h1>
            the subject id is: {subject_id}
        </h1>
    </div>
  )
}
