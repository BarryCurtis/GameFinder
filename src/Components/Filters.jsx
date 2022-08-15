const Filters = () => {
  return (
    <section className="filters">
      <h4 className="sort_by.label">Sort events</h4>
      <select
        name="category"
        id=""
        className="filters.choice"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      >
        <option value="">Sport</option>
        <option value="football">Football</option>
        <option value="netball">Netball</option>
        <option value="squash">Squash</option>
      </select>

      <select
        name="gender"
        id="gender"
        className="filters.choice"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      >
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="mixed">Mixed</option>
      </select>
      <select
        name="ageGroup"
        id="ageGroup"
        className="filters.choice"
        onChange={(e) => {
          console.log(e.target.value);
        }}
        placeholder="Age Group"
      >
        <option value="">Age Group</option>
        <option value="18-30">18-30</option>
        <option value="30-50">30-50</option>
        <option value="50+">50+</option>
      </select>

      <select
        name="order"
        id="order"
        className="filters.choice"
        onChange={(e) => {
          console.log(e.target.value);
        }}
        placeholder="Order"
      >
        <option value="">Order</option>
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
    </section>
  );
};

export default Filters;
