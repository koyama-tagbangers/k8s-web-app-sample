import * as React from 'react'

export default () => {
  const baseUrl = process.env.NODE_ENV === 'development' ? 'localhost:8080' : 'api.jk.test'
  const [oranges, setOranges] = React.useState([])

  React.useEffect(() => {
    fetch(`http://${baseUrl}/oranges`)
      .then(res => res.json())
      .then(json => setOranges(json.sort((a, b) => a.ranking - b.ranking)))
  }, [])

  return (
    <table>
      <tbody>
        <tr>
          <th>Ranking</th>
          <th>From</th>
          <th>🍊</th>
        </tr>
        {oranges.map(orange => (
          <tr key={orange.id}>
            <td>{orange.ranking}</td>
            <td>{orange.from}</td>
            <td>{orange.id}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
