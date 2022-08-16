import axios from "axios"
export function createRef(events){
    const newEvents = events.map((event)=>{
         const newObj = {}
         newObj.location = event.location.replace(" ", "+")
         newObj.category = event.category
         return newObj
    })

    const promisies = newEvents.map((newEvent)=>{
        return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${newEvent.location}&key=AIzaSyB_krhi9Y0ZhqLYMN5DfVMVD06UCjnJ78A`)
    // console.log(res.data.results[0].geometry.location)
    })
    return Promise.all(promisies).then(resposne=>{
        return resposne.map(r=>{
            return r.data.results[0].geometry.location
        })
    })
}