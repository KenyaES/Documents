import Card from './Card'

const Grid = () => {
    return(
        <div className="grid">
            <h2>Upcoming Events</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Creative Workshops!</th>
                        <div className="gridRow">
                            <td><Card event="Cartooning Basics" info="For ages 16 and up, every Saturday from 10 to 4!"/></td>
                            <td><Card event="Pottery Making" info="Adults only crafting and craft beers, this Friday at 7 PM!"/></td>
                            <td><Card event="Painting Class" info="Afterschool program for children 12 - 16 to practice paience and research with a creative outlook!"/></td>
                            <td><Card event="Scrapbooking" info="Keep your memories and mind alive at the museum for this months 50+ scraping class!"/></td>
                        </div>
                    </tr>
                    <tr>
                        <th>Games and Parties!</th>
                        <div className="gridRow">
                            <td><Card event="Board Game Night" info="A family-friendly evening of board games from 3pm to 10pm every third Friday!"/></td>
                            <td><Card event="Karaoke Night" info="Join us twice a week for cheers and champagne! Adults only from 10pm to 3am"/></td>
                            <td><Card event="Movie Marathon" info="Online watch party for anyone 16 and up!"/></td>
                            <td><Card event="Dance Party" info="Evening skate and jive for all ages! This Sunday at 5pm"/></td>
                        </div>
                    </tr>
                    <tr>
                        <th>Trades and Classes!</th>
                        <div className="gridRow">
                            <td><Card event="Candle Making" info="Introductory course for teens and adults every second Saturday from 11 to 4"/></td>
                            <td><Card event="Yoga Class" info="Improve your flexibility and strength every Sunday from 8 to 12, ages 18 and up!"/></td>
                            <td><Card event="Cooking Workshop" info="Biweekly summer workshop for students 14 - 20!"/></td>
                            <td><Card event="Language Learning" info="Start your journey in a new language, opportunities for all ages throughout teh week!"/></td>
                        </div>
                    </tr>
                </tbody>
            </table>

        </div>
    );

};

export default Grid;