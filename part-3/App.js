function App() {
    return (
        <div>
            <Person
                name="Paul"
                age={17}
                hobbies={["spice", "kwisatz haderach"]}
            />
            <Person
                name="Gurney"
                age={55}
                hobbies={["swordplay", "poetry", "baliset"]}
            />
            <Person
                name="Stilgar"
                age={43}
                hobbies={["collecting water", "spice"]}
            />
        </div>
    );
}