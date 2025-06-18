function ListCast({ cast, onChoice }) {

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(90px, 1fr))",
      gap: "1rem",
      marginBottom: '1rem'
    }}>
      {
        cast.map(member => (
          <a onClick={() => { onChoice(member) }} key={member.id} data-tooltip={member.name}>
            <img src={`images/${member.slug}_tn.svg`} alt={member.name} />
          </a>
        ))
      }
    </div>
  )
}

export default ListCast;