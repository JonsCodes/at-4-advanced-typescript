const React = require("react");
const Def = require("../default");

function edit_form(data) {
  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  return (
    <Def>
      <main>
        <h1>Edit Place</h1>
        <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
          <div className="row">
            <div className="form-group col-sm-6">
              <label htmlFor="name">Place Name</label>
              <input
                className="form-control"
                id="name"
                name="name"
                value={data.place.name}
                required
              />
            </div>
            <div className="form-group col-sm-6">
              <label htmlFor="pic">Place Picture</label>
              <input className="form-control" id="pic" name="pic" />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-6">
              <label htmlFor="city">City</label>
              <input className="form-control" id="city" name="city" />
            </div>
            <div className="form-group col-sm-6">
              <label htmlFor="state">State</label>
              <select className="form-control" id="state" name="state">
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-6">
              <label htmlFor="cuisines">Cuisines</label>
              <input
                className="form-control"
                id="cuisines"
                name="cuisines"
                required
              />
            </div>
            <div className="form-group col-sm-6">
              <label htmlFor="founded">Founded</label>
              <input
                className="form-control col-sm-6"
                id="founded"
                name="founded"
                value={data.place.founded}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <input
                className="btn btn-primary"
                type="submit"
                value="Submit Changes"
              />
            </div>
          </div>
        </form>
      </main>
    </Def>
  );
}

module.exports = edit_form;
