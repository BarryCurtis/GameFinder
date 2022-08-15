const CreateEvent = () => {
  return (
    <div className="create.event">
      <h2 className="create event title">Host and event and find players</h2>
      <div className="createEvent.form">
        <form action="" className="createEvent.form.form">
          <label for="category" className="">
            Choose sport:
          </label>
          <select
            name="category"
            id="category"
            className="createEvent.form.category"
          >
            <option value="">Sport</option>
            <option value="football">Football</option>
            <option value="netball">Netball</option>
            <option value="squash">Squash</option>
          </select>
          <br />
          <label for="location" className="">
            Location:
          </label>
          <input
            name="location"
            type="text"
            className="createEvent.form.location"
            placeholder="enter postcode"
          />
          <br />
          <label for="players_needed" className="">
            How many players do you need?
          </label>
          <select
            name="players_needed"
            id="players_needed"
            className="createEvent.form.players"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
          </select>
          <label for="time" className="">
            What time does the game start?
          </label>
          <input type="time"></input>

          <br />
          <label for="duration" className="">
            How many hours will the game last?
          </label>
          <select
            name="duration"
            id="duration"
            className="createEvent.form.duration"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
