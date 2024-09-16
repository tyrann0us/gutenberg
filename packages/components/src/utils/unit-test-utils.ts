export function mockReducedMotion() {
	// Mock `matchMedia` so that all animations are skipped,
	// since js-dom does not support fully CSS animations.
	const originalMatchMedia = window.matchMedia;
	const mockedMatchMedia = jest.fn( ( query: string ) => {
		if ( /prefers-reduced-motion/.test( query ) ) {
			return { matches: true } as ReturnType< typeof window.matchMedia >;
		}

		return originalMatchMedia( query );
	} );

	return {
		beforeAll: () => {
			window.matchMedia = jest.fn( mockedMatchMedia );
		},
		afterAll: () => {
			window.matchMedia = originalMatchMedia;
		},
	};
}
