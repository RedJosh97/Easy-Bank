import ButtonIcon from "../button/button";
import "./footer.css";
import image from "../image/logo.svg";
import fb from "../image/icon-facebook.svg";
import tw from "../image/icon-twitter.svg";
import yt from "../image/icon-youtube.svg";
import pi from "../image/icon-pinterest.svg";
import it from "../image/icon-instagram.svg";

function Footer() {
	return (
		<div className='foot-back'>
			<div className='foot-cont'>
				<div className='cont'>
					<img className='imglast' src={image} alt='logo' />
					<div className='logos'>
						<img src={fb} alt='logo' />
						<img src={yt} alt='logo' />
						<img src={tw} alt='logo' />
						<img src={pi} alt='logo' />
						<img src={it} alt='logo' />
					</div>
				</div>
				<div className='cont'>
					<ul>
						<li>About Us</li>
						<li>Contact</li>
						<li>Blog</li>
					</ul>
				</div>
				<div className='cont'>
					<ul>
						<li>Carrers</li>
						<li>Support</li>
						<li>Public Policy</li>
					</ul>
				</div>
			</div>

			<div className='foot-last'>
				<ButtonIcon />
				<p>&copy; EasyBank. All Right Reserved</p>
			</div>
		</div>
	);
}

export default Footer;
