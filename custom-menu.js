/**
 * Custom Script - Scroll to Top Only
 */
(function($) {
    'use strict';

    $(document).ready(function() {
        initScrollToTop();
    });

    function initScrollToTop() {
        const scrollToTop = $('#scrollToTop');
        let ticking = false;

        if (!scrollToTop.length) {
            console.warn('⚠️ Scroll To Top button not found!');
            return;
        }

        // إظهار/إخفاء الزر عند السكرول
        function handleScroll() {
            const scrollTop = $(window).scrollTop();

            if (scrollTop > 500) {
                scrollToTop.addClass('show');
            } else {
                scrollToTop.removeClass('show');
            }
        }

        // تحسين الأداء (Throttling)
        function throttledScroll() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        }

        $(window).on('scroll', throttledScroll);

        // الصعود بنعومة عند النقر
        scrollToTop.on('click', function(e) {
            e.preventDefault();
            
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // تشغيل الفحص الأولي
        handleScroll();
    }

})(jQuery);