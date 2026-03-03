
export const UserCard = ({ name, state, location }) => {
  return (
    <div>
      <h2>Nombre: {name}</h2>
      <p>State: {state}</p>
      <p>Location: {location}</p>
    </div>
  )
}
