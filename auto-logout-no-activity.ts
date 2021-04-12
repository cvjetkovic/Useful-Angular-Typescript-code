    time: any;

   @HostListener('document:mousemove')
    @HostListener('document:keypress')
    @HostListener('document:click')
    @HostListener('document:wheel')
    @HostListener('document:scroll')
    @HostListener('document:keyup')
    @HostListener('document:resize')
    resetTimer() {
        clearTimeout(this.time);
        this.time = setTimeout(() => {
            this.authService.logout();
            this.router.navigate(['/login']);
        }, 600000);
    }

        this.resetTimer();
