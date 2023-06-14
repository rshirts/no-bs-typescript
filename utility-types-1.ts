interface MyUser {
  name: string,
  id: number,
  email?: string
}

type MyUserOptionals = Partial<MyUser>;

type RequiredMyUser = Required<MyUser>;

type JustEmailAndName = Pick<MyUser, "email" | "name">



// interface MyUserOptionals {
//   name?: string,
//   id?: string,
//   email?: string
// }

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides
  }
}

console.log(
  merge( {
    name: 'jack',
    id: 2,
    email:'myemail@mail.mail'
  },
  {
    email:"dontemailbaz@dontemail.com"
  })
)
type UserWithoutID = Omit<MyUser, "id">

const mapById = (users: MyUser[]): Record<MyUser["id"], UserWithoutID> => {
  return users.reduce((a, v) => {
    const {id, ...other} = v;
    return {
      ...a,
      [id]: other,

    }
  }, {});
}

console.log(mapById([
  {
    id: 1,
    name: "mr.foo"
  },
  { 
    id: 2,
    name: "mr.baz"
  }
]));