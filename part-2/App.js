function App() {
    return (
        <div>
            <Tweet
                name="Duke Leto"
                username="houseatreides10191"
                date={new Date().toDateString()}
                message="the spice must flow"
                />
            <Tweet
                name="Dr. Liet-Kynes"
                username="shai-hulud4"
                date={new Date().toDateString()}
                message="bless the maker and his water. bless the coming and going
                        of him. may his passage cleanse the world. may he keep the world
                        for his people."
                />
            <Tweet
                name="Paul Atreides"
                username="muaddib00"
                date={new Date().toDateString()}
                message="a war in my name"
                />
        </div>
    );
}