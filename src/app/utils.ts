export function scrollToElementById(element: string): void {
	const el = document.getElementById(element);
	if (!el) return;

	const offsetPush = window.innerWidth <= 700 ? 78 : 110;		// substracted value from offset -> should be the height of the navbar

	const rect = el.getBoundingClientRect();
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	const offset = rect.top + scrollTop - offsetPush;

	window.scrollTo({ top: offset, behavior: 'smooth' });
}


export const ABOUT_SECTION = 'about-section';
export const FOOTER_SECTION = 'footer-section';
export const CAROUSEL_SECTION = 'carousel-section';
export const CARDS_SECTION = 'cards-section';

export const FACEBOOK = 'https://www.facebook.com/p/Baking-Films-61561806923938/';
export const INSTAGRAM = 'https://www.instagram.com/baking.films/';
