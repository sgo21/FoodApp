import React from 'react';
 
const Contribute = () => {
    return (
       <div class="container">
            <div style="text-align:center">
                <h2>Contribute</h2>
                    <p>Foodie is still in its beta stages, and is open to suggestions and ideas from its users. If 
                        you would like to contribute your thoughts and ideas, please submit the Contribution Form below! </p>
            </div>

            <form>
        <label>First Name: <input type="text" name="fname"/></label>
          <br/>
      <label>Last Name: <input type="text" name="lname"/></label>
          <br/>
          <label>Please Select a Contribution Type
            <select >
          <option value="australia">Functionality</option>
          <option value="canada">Website Appearance</option>
          <option value="canada">Recipe suggestion</option>
          <option value="usa">Other (please specify below) </option>
        </select>
        </label>
        <textarea id="subject" name="subject" placeholder="Write something.." style="height:170px"></textarea>
        <button type="button" input id="autocomplete" class="nbutton" type="submit">Save</button>
      </form>
    </div>
    );
}
 
export default Contribute;