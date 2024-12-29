'use client';
import Link from "next/link";
import { useRouter } from "next/router";

export default async function page({params}) {
    const {teacher_id} = await params || {};

 
  return (
    <div>
        <h1>
            frontend2 teacher/teacher_id
        </h1>
        <h1>
            teacher id is {teacher_id}
        </h1>

        <Link href="67">click mee</Link>
    </div>
  )
}

