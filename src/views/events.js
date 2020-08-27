import React, { useContext } from 'react';
import { Context } from './../store/appContext';

const EventDetail = props => {
    const { store } = useContext(Context);
    return (
        <>
            {/* <!-- banner --> */}
            <div className="banner">
                <div className="container">
                    {/* <!-- heading --> */}
                    <h2>I'm Banner Heading for This Page</h2>
                    {/* <!-- paragraph --> */}
                    <p>It is our belief that in order to be most efficient it requires adaptive technology and software our customers can focus on their core business.</p>
                </div>
            </div>
            {/* <!-- banner end --> */}



            {/* <!-- events --> */}
            <div className="event" id="event">
                <div className="container">
                    <div className="default-heading">
                        {/* <!-- heading --> */}
                        <h2>Upcoming events</h2>
                    </div>
                    <div className="row">

                        {
                            !!store.events &&
                            store.events.map((event, index) => {
                                return (
                                    <div className="col-md-4 col-sm-4" key={index}>
                                        {/* <!-- event item --> */}
                                        <div className="event-item">
                                            {/* <!-- image --> */}
                                            <img className="img-responsive" src={event.image} alt="Events" />
                                            {/* <!-- heading --> */}
                                            <h4><a href="/#">{event.title}</a></h4>
                                            {/* <!-- sub text --> */}
                                            <span className="sub-text">{event.resume}</span>
                                            {/* <!-- paragraph --> */}
                                            <p>{event.description}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
            {/* <!-- events end --> */}

            {/* <!-- blog --> */}
            <div className="blog" id="blog">
                <div className="container">
                    <div className="default-heading">
                        {/* <!-- heading --> */}
                        <h2>Latest Blogs</h2>
                    </div>
                    <div className="row">

                        {
                            !!store.blogs &&
                            store.blogs.map((blog, index) => {
                                return (
                                    <div className="col-md-6 col-sm-6" key={index}>
                                        {/* <!-- blog entry --> */}
                                        <div className="entry">
                                            {/* <!-- blog entry image --> */}
                                            <img className="img-responsive" src={blog.image} alt="Blog" />
                                            {/* <!-- heading / blog post title --> */}
                                            <h3><a href="/#">{blog.title}</a></h3>
                                            {/* <!-- blog information --> */}
                                            <span className="meta">
                                                {blog.date}
                                            </span>
                                            {/* <!-- paragraph --> */}
                                            <p>{blog.description}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className="text-center">
                        <a href="/#" className="btn btn-default">See More</a>
                    </div>
                </div>
            </div>
            {/* <!-- blog end -->
			
			<!-- subscribe --> */}
            <div className="subscribe" id="subscribe">
                <div className="container">
                    {/* <!-- subscribe content --> */}
                    <div className="sub-content">
                        <h3>Subscribe Here for Updates</h3>
                        <form role="form">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Email..." />
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="button">Subscribe</button>
                                </span>
                            </div>{/* <!-- /input-group --> */}
                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- subscribe end -->
			
			<!-- team --> */}
            <div className="team" id="team">
                <div className="container">
                    <div className="default-heading">
                        {/* <!-- heading --> */}
                        <h2>Executing Team</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-3">
                            {/* <!-- team member --> */}
                            <div className="member">
                                {/* <!-- images --> */}
                                <img className="img-responsive" src="img/team/1.jpg" alt="Team Member" />
                                {/* <!-- heading --> */}
                                <h3>Adam Miser</h3>
                                {/* <!-- designation --> */}
                                <span className="dig">CEO</span>
                                {/* <!-- email --> */}
                                <a href="#">executive.member@bloger.com</a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3">
                            {/* <!-- team member --> */}
                            <div className="member">
                                {/* <!-- images --> */}
                                <img className="img-responsive" src="img/team/2.jpg" alt="Team Member" />
                                {/* <!-- heading --> */}
                                <h3>Adam Miser</h3>
                                {/* <!-- designation --> */}
                                <span className="dig">CEO</span>
                                {/* <!-- email --> */}
                                <a href="/#">executive.member@bloger.com</a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3">
                            {/* <!-- team member --> */}
                            <div className="member">
                                {/* <!-- images --> */}
                                <img className="img-responsive" src="img/team/1.jpg" alt="Team Member" />
                                {/* <!-- heading --> */}
                                <h3>Adam Miser</h3>
                                {/* <!-- designation --> */}
                                <span className="dig">CEO</span>
                                {/* <!-- email --> */}
                                <a href="/#">executive.member@bloger.com</a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3">
                            {/* <!-- team member --> */}
                            <div className="member">
                                {/* <!-- images --> */}
                                <img className="img-responsive" src="img/team/2.jpg" alt="Team Member" />
                                {/* <!-- heading --> */}
                                <h3>Adam Miser</h3>
                                {/* <!-- designation --> */}
                                <span className="dig">CEO</span>
                                {/* <!-- email --> */}
                                <a href="/#">executive.member@bloger.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- team end --> */}
        </>
    )
}

export default EventDetail;