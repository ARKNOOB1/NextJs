'use client'
import Link from 'next/link';
export default  function ListItem({result}) {
    return (
        <div >
            {
                result.map((a,i) => 
                    <div className="list-item" key={i}>
                        <Link href={'/detail/'+result[i]._id}><h4>{result[i].title}</h4></Link>
                        <Link href={'/edit/'+result[i]._id} className="list-btn">🛠️</Link>
                        <button>❌</button>
                        <p>1월 1일</p>
                    </div>
                )
            }
        </div>
    )
}