import { Posts } from "./Data";

export const Suggestion = () => {
  return (
    <div className="suggestion">
      <div className="fixedSugg">
        <section className="selfSugg">
          <figure>
            <div className="myPic">
              <img src="./images/dinner2.jpeg" alt="" />
            </div>
            <div className="myInfo">
              <h4>suresh kumawat</h4>
              <p>shunya</p>
            </div>
          </figure>
          <span>Switch</span>
        </section>
        <section className="otherSuggs">
          <div className="aboutOthSugg">
            <h5>Suggestions For You</h5>
            <span>See All</span>
          </div>
          <div>
            {Posts.slice(0,5).map((people) => {
              return (
                <section className="otherSugg" key={people.id}>
                  <figure>
                    <div className="othPic">
                      <img src={people.img} alt="not find" />
                    </div>
                    <div className="othInfo">
                      <h4>{people.user}</h4>
                      <p>shunya</p>
                    </div>
                  </figure>
                  <span>Follow</span>
                </section>
              );
            })}
          </div>
        </section>
        <section className="suggFooter">
                <ul>
                    <li>About</li>
                    <li>Help</li>
                    <li>Press</li>
                    <li>API</li>
                    <li>Jobs</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Locations</li>
                    <li>Top</li>
                    <li>Accounts</li>
                    <li>Hashtags</li>
                    <li>Language</li>
                    <li>English</li>
                </ul>
                <p>© 2021 INSTAGRAM FROM FACEBOOK</p>
        </section>
      </div>
    </div>
  );
};
