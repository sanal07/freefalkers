const data = [
    {id: 1,name: 'John Doe', email: 'jhondoe@gmail.com'},
    {id: 2,name: 'Jenny Doe', email: 'jennydoe@gmail.com'}
]

export async function GET(){
    return Response.json(data)
}export async function POST(req) {
    const body = await req.json();
    const newUser = {id: users.length + 1, ...body};
    data.push(newUser);
    return Response.json(newUser, {status: 201})

}