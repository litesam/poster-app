import moment from 'moment'

export default (posts, { text, startDate, endDate }) => {


  return posts.filter(post => {
    const createdAtMoment = moment(post.createdAt)
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
    const textMatch = post.description.toLowerCase().includes(text.toLowerCase())

    return startDateMatch && endDateMatch && textMatch
  })
}
