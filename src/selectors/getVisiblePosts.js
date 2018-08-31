import moment from 'moment'

export default (posts, { text, startDate, endDate }) => {
  const poster = posts.map((post) => post.post)
  const posters = []

  poster.forEach((post) => {
    post.forEach((pos) => {
      posters.push(pos)
    })
  })

  return posters.filter(post => {
    const createdAtMoment = moment(post.createdAt)
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
    const textMatch = post.description.toLowerCase().includes(text.toLowerCase())

    return startDateMatch && endDateMatch && textMatch
  })
}