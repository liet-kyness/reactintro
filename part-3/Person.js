function Person({ name, age, hobbies}) {
    const voterText = age >= 18 ? "please go vote!" : "not old enough";
    const listHobbies = hobbies.map(h => <li>{h}</li>);

    return (
        <div>
            <h2>Learn some information about this person:</h2>
            <ul>
                <li>Name: {name.slice(0, 6)}</li>
                <li>Age: {age}</li>
                <ul>Hobbies:
                    {listHobbies}
                </ul>
            </ul>
            <h4>{voterText}</h4>
        </div>
    );
}