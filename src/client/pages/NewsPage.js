import React, { Component } from 'react'

export default class NewsPage extends Component {
  render() {
    return <div>NewsPage</div>
  }
}

// import React, { useState, useEffect } from 'react'
// // import Loading from './Loading'
// // import ToursCreate from './Tours'

// const url = 'https://course-api.com/react-tours-project'

// export default function NewsPage() {
//   // const [loading, setLoading] = useState(true)
//   // const [tours, setTours] = useState([])

//   // const removeTour = (id) => {
//   //   const newTours = tours.filter((tour) => tour.id !== id)
//   //   setTours(newTours)
//   // }

//   // const fetchTours = async () => {
//   //   // setLoading(true)
//   //   try {
//   //     const response = await fetch(url)
//   //     const tours = await response.json()
//   //     // setLoading(false)
//   //     setTours(tours)
//   //   } catch (error) {
//   //     // setLoading(false)
//   //     console.log(error)
//   //   }
//   // }

//   // useEffect(() => {
//   //   fetchTours()
//   // }, [])
//   // if (loading) {
//   //   return (
//   //     <main>
//   //       <Loading />
//   //     </main>
//   //   )
//   // }

//   // if (tours.length === 0) {
//   //   return (
//   //     <main>
//   //       <div className="title">
//   //         <h2>no tours left</h2>
//   //         <button onClick={fetchTours} className="btn">
//   //           refresh
//   //         </button>
//   //       </div>
//   //     </main>
//   //   )
//   // }
//   return (
//     <main>
//       {/* <ToursCreate tours={tours} removeTour={removeTour} /> */}
//       <div>News page</div>
//     </main>
//   )
// }
