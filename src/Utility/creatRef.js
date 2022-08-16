import axios from "axios";
export function createRef(events) {
  const newEvents = events.map((event) => {
    const newObj = {};
    newObj.location = event.location.replace(" ", "+");
    newObj.category = event.category;
    return newObj;
  });

  const promisies = newEvents.map((newEvent) => {
    return axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${newEvent.location}&key=AIzaSyB_krhi9Y0ZhqLYMN5DfVMVD06UCjnJ78A`
    );
    // console.log(res.data.results[0].geometry.location)
  });
  return Promise.all(promisies).then((resposne) => {
    const cooardinates = resposne.map((r, i) => {
      if (r.data.results.length === 0) {
        return {lat: 0, lng: 0}
      } else {
        return r.data.results[0].geometry.location;
      }
    });
    return cooardinates;
  });
}




// const events = ([
//   {
//     category: "netball",
//   event_id: 10,
//   firebase_id: "as",
//   gender: "female",
//   skills_level: 5,
//   location: "M11 4DQ",
//   },
//   {
//     event_id: 10,
//     firebase_id: "ds",
//     gender: "female",
//     skills_level: 5,
//     location: "M12 4DY",
//     },
//   ])