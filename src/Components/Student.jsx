const students=[
    {id:1,name:"Nikhil",age:20,email:"Nikhil@gmail.com"},
    {id:2,name:"Palini",age:22,email:"Palini@gmail.com"},
    {id:3,name:"Lokesh",age:25,email:"Lokesh@gmail.com"},
];

function Student_Dis(){
    return (
        <>
        <div> {students.map((s) =>(
            <div>
                <p>{s.id}</p>
                <p>{s.name}</p>
                <p>{s.age}</p>
                <p>{s.email}</p>
            </div>
        ))}</div>
        </>
    );
}
export default Student_Dis