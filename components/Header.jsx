import styles from '../styles/components/primary-buttons.module.css'

function Header() {
    return (
        <nav>

            <div className="logo">Insaf Sansthan</div>
            <label for="btn" className="icon">
                <span className="fa fa-bars"></span>
            </label>
            <input type="checkbox" id="btn" />

            <ul>

                <li><a href="#">Home</a></li>

                <li><a href="#">Our Story</a></li>

                <li>
                    <label for="btn-1" className="show">Activities/Works</label>
                    <a href="#">Activities/Works</a>
                    <input type="checkbox" id="btn-1" />
                    <ul>
                        <li><a href="#">Folk/Music</a></li>
                        <li><a href="#">Craft Tour</a></li>
                        <li><a href="#">Wildlife Tour</a></li>
                    </ul>
                </li>

                <li>
                    <label for="btn-2" className="show">About Us</label>
                    <a href="#">About Us</a>
                    <input type="checkbox" id="btn-2" />
                    <ul>
                        <li><a href="#" >Insaf Sansthan</a></li>
                        <li><a href="#">Founder</a></li>
                        <li><a href="#">Our Team</a></li>
                    </ul>
                </li>



                <li><a href="#">Blog</a></li>
                <li><a href="#">Art Gallery</a></li>


                <li>
                    <label for="btn-2" className="show">Contact Us</label>
                    <a href="#">Contact Us
                    </a>
                    <input type="checkbox" id="btn-2" />

                    <ul>
                        <li><a href="#">Work with Us</a></li>
                        <li><a href="#">Reach Us</a></li>
                    </ul>

                </li>

                <li className={`${styles.primary_button}`}>
                    <a href="#">Donate Us</a>
                </li>


            </ul>
        </nav>


    );
}

export default Header
