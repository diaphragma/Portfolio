$(document).ready((function () {
    $(this).scrollTop(0), $(window).on("load", (function () {
        var e = $(".preloader");
        e.find(".preloader__img").fadeOut(), e.delay(500).fadeOut("slow")
    })),

    $(".header__menu-btn").click((function (e) {
        $(".header__menu-btn").toggleClass("header__menu-btn_active"), $(".header__list").toggleClass("header__list_active")
    })),

    $(".header__list").on("click", "a", (function (e) {
        e.preventDefault();
        var o = $(this).attr("href"),
            t = $(o).offset().top;
        $("body,html").animate({
            scrollTop: t
        }, 1e3)
    })), 

    $(".portfolio").on("click", "a", (function (e) {
        e.preventDefault();
        var o = $(this).attr("href"),
            t = $(o).offset().top;
        $("body,html").animate({
            scrollTop: t
        }, 1e3)
    })), 
    
    $(".prices__table").on("click", "a", (function (e) {
        e.preventDefault();
        var o = $(this).attr("href"),
            t = $(o).offset().top;
        $("body,html").animate({
            scrollTop: t
        }, 1e3)
    }));

    var e = {
        en: {
            main: "Main",
            "about-me": "A few about me",
            portfolio: "Portfolio",
            "services-and-prices": "Services and prices",
            "how-to-contact": "How to contact?",
            logo: "diaphragma",
            "intro-d": "Photographer's site-portfolio.",
            slogan: "Catch moments. Remember yourself.",
            "start-about": "Let's start with a greeting.",
            "first-p": "Hi, my name is Nikita.I am a skilled photographer from Dnipro, who is also engaged in web development (what you see now) and QA (in common people, a tester).",
            "second-p": "This site was made solely to promote my work and provide my services as a photographer.",
            "why-me": "Why me?",
            "third-p": "➤ I take photos with soul (like this site and my works below), with a desire and want to give a person what he will remember - himself.",
            "fourth-p": "➤ The price, number of photos, quality, in comparison with other photographers, look more tempting.",
            "fifth-p": "➤ With different people, different approach. You can definitely not be afraid of me, because we will solve all doubts and questions. We can select clothes, location, idea for a photo in advance, so that there is less excitement and waste of time.",
            "sixth-p": "➤ Speed. Once the photoset will be finished, I will start work / processing photos (10-20 pieces) on the same day, I will try to throw them off on the same day. If you need to process or change something else, I will be ready to consider options.",
            "seventh-p": "➤ I answer quickly (the phone is always nearby) and arrive at the appointed places on time.",
            "eighth-p": "Sounds good for such a photographer, right? Let's look further.",
            "also-chance": "You also have the opportunity to get here ^_^",
            assign: "Assign a photoset",
            time: "Time",
            hour: "1 hour",
            day: "All day",
            "indv-time": "Individualy",
            service: "Service",
            "street-photo-session": "Street photo session",
            "day-d": "Wedding day or a whole day of shooting for any event. The shooting takes place according to a agreed plan. The price depends on the time and scale of the event.",
            "indv-service": "It is discussed individually, based on the customer's requirements",
            price: "Price",
            "indv-money": "Depends on request",
            order: "Order",
            contacts: "Contacts",
            "contacts-d": "A faster option is to use my contacts, as I keep my phone nearby and answer promptly.",
            telephone: "Telephone",
            email: "Email",
            address: "Dnipro, Cathedral district",
            "also-find-me-here": "You can also find me here:",
            form: "Feedback form",
            "form-d": "If you do not like to call and communicate through social networks or messengers, then you can fill out a feedback form, after which I will contact you, but this option is longer on response.",
            name: "What's your name:",
            details: "Details (optional):",
            permission: "you agree to the processing of data that will not be transferred to third parties, but exclusively for a photo session and communication with a photographer.",
            copyright: "diaphragma.photos, 2020. All rights reserved.",
            send: "Send"
        },
        ua: {
            main: "Головна",
            "about-me": "Трохи про мене",
            portfolio: "Портфоліо",
            "services-and-prices": "Послуги та ціни",
            "how-to-contact": "Як зв'язатися?",
            logo: "diaphragma",
            "intro-d": "Сайт-портфоліо фотографа.",
            slogan: "Лови моменти. Пам'ятай себе.",
            "start-about": "Почнемо з вітання.",
            "first-p": "Привіт, мене звуть Микита.Я умілий фотограф з Дніпра, який також займається веб-розробкою (те, що ти зараз бачиш) і QA (в народі, тестувальник).",
            "second-p": "Цей сайт був зроблений виключно для просування моїх робіт і надання моїх послуг, як фотографа.",
            "why-me": "Чому я?",
            "third-p": "➤ Я ​​роблю фотографії з душею (як цей сайт і мої роботи знизу), з бажанням і хочу дати людині те, що він буде пам'ятати - себе.",
            "fourth-p": "➤ ➤ Ціна, кількість фотографій, якість, в порівнянні з іншими фотографами, виглядають привабливіше.",
            "fifth-p": "➤ З різними людьми, різний підхід. Мене точно можна не боятися, адже всі сумніви і питання ми вирішимо. Одяг, локацію, ідею для фото можемо підбирати заздалегідь, щоб було менше хвилювань і витрати часу.",
            "sixth-p": "➤ Швидкість. Якось тільки фотосет буде закінчений, я в цей же день прийми за роботу / обробку фотографій (10-20 штук.), Постараюся в цей же день їх скинути. При потребі щось ще обробити або змінити, то буду готовий розглянути варіанти.",
            "seventh-p": "➤ Я ​​швидко відповідаю (телефон завжди поруч) і приходжу на призначені місця вчасно.",
            "eighth-p": "Начебто непогано, як для такого фотографа, вірно?\n            Пішли дивитися далі.",
            "also-chance": "У тебе також є можливість сюди потрапити ^_^",
            assign: "Призначити фотосет",
            time: "Час",
            hour: "1 година",
            day: "Цілий день",
            "indv-time": "Індивідуально",
            service: "Послуга",
            "street-photo-session": "Вулична фотосесія",
            "day-d": "Весільний день або цілий знімальний день будь-якого заходу. Зйомка відбувається за заздалегідь обумовленим планом. Ціна залежить від часу та масштабу події.",
            "indv-service": "Це обговорюється індивідуально, виходячи з вимог замовника.",
            price: "Ціна",
            "indv-money": "Залежить від вимоги",
            order: "Замовити",
            contacts: "Контакти",
            "contacts-d": "Більш швидший варіант скористатися моїми контактами, так як я телефон тримаю поруч і оперативно відповідаю. ",
            telephone: "Телефон:",
            email: "Пошта:",
            address: "м. Дніпро, Соборний район",
            "also-find-me-here": "Можете також знайти мене тут:",
            form: "Зворотня форма",
            "form-d": "Якщо ви не любите дзвонити або зв'язуватися через соц.мережі або месенджери, то ви можете оформити зворотню форму зв'язку, після якої я з вами зв'яжуся, але цей варіант довше по відгуку.",
            name: "Ваше ім'я:",
            details: "Деталі(за бажанням):",
            permission: "ви погоджуєтеся на обробку даних, які не будуть передаватися 3-им особам, а виключно для фотосесії і зв'язку з фотографом.",
            copyright: "diaphragma.photos, 2020. Всі права захищені.",
            send: "Відправити"
        },
        ru: {
            main: "Главная",
            "about-me": "Немного о себе",
            portfolio: "Портфолио",
            "services-and-prices": "Услуги и цены",
            "how-to-contact": "Как связаться?",
            logo: "diaphragma",
            "intro-d": "Сайт портофолио фотографа.",
            slogan: "Лови моменты. Помни себя.",
            "start-about": "Начнем с приветствия.",
            "first-p": " Я умелый фотограф из Днепра, который также занимается веб-разработкой\n            (то, что ты сейчас видишь) и QA(в простонародии, тестировщик).",
            "second-p": "Этот сайт был сделан исключительно для продвижения моих работ и предоставления моих услуг, как фотографа.",
            "why-me": "Почему я?",
            "third-p": "➤ Я делаю фотографии с душой(как этот сайт и мои работы снизу), с желанием и хочу дать человеку то, что он будет помнить - себя.",
            "fourth-p": "➤ Цена, кол-во фотографий, качество, по сравнению с другими фотографами,выглядят заманчивее.",
            "fifth-p": "➤ С разными людьми, разный подход. Меня точно можно не бояться, ведь все сомнения и вопросы мы решим. Одежду, локацию, идею для фото можем подбирать заранее, чтоб было меньше волнений и траты времени.",
            "sixth-p": "➤ Скорость. Как-то только фотосет будет закончен, я в этот же день приймусь за работу/обработку фотографий(10-20 штук.), постараюсь в этот же день их скинуть. При надобности что-то еще обработать или изменить, то буду готов рассмотреть варианты.",
            "seventh-p": "➤ Я быстро отвечаю(телефон всегда рядом) и прихожу на назначенные места вовремя. ",
            "eighth-p": "Вроде бы неплохо, как для такого фотографа, верно?\n            Пошли смотреть дальше.",
            "also-chance": "У тебя тоже есть возможность сюда попасть ^_^ ",
            assign: "Назначить фотосет",
            time: "Время",
            hour: "1 час",
            day: "Целый день",
            "indv-time": "Индивидуально",
            service: "Услуга",
            "street-photo-session": "Уличная фотосессия.",
            "day-d": "Свадебный день или целый съёмочный день любого мероприятия.Съемка происходит по заранее оговоренному плану.Цена зависит от времени и масштаба события.",
            "indv-service": "Обсуждается  индивидуально, исходя из требований заказчика.",
            price: "Цена",
            "indv-money": "По запросу",
            order: "Заказать",
            contacts: "Контакты",
            "contacts-d": "Более быстрый вариант воспользоваться моими контактами , так как я телефон держу рядом и оперативно отвечаю.",
            telephone: "Телефон",
            email: "Почта",
            address: "г.Днепр, Соборный район",
            "also-find-me-here": "Можете также меня найти тут:",
            form: "Обратная форма",
            "form-d": "Если вы не любите звонить и связываться через соц.сети или мессенджеры, то вы можете оформить обратную форму связи, после которой я с вами свяжусь, но этот вариант дольше по отклику.",
            name: "Как вас зовут:",
            details: "Детали (по желанию):",
            permission: " вы соглашаетесь на обработку данных, которые не будут передаваться 3-им лицам, а исключительно для фотосессии и связи с фотографом.",
            copyright: "diaphragma.photos, 2020. Все права защищены.",
            send: "Отправить"
        }
    };

    $(".translate").click((function () {
        var o = $(this).attr("id");
        $(".lang").each((function (t, a) {
            $(this).text(e[o][$(this).attr("key")])
        }))
    })), 
    
    new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: !0,
        live: !0,
        callback: function (e) {},
        scrollContainer: null
    }).init(), 
    
    $((function () {
        $("#tel").mask("+380(99) 999-99-99")
    })), 
    
    $("a.active").removeClass("active"), 
    jQuery(window).scroll((function () {
        $("section").each((function (e, o) {
            var t = $(o).offset().top - 150,
                a = t + $(o).height(),
                i = $(window).scrollTop(),
                s = $(o).attr("id");
            i > t && i < a && ($("a.active").removeClass("active"), $('a[href="#' + s + '"]').addClass("active"))
        }))
    }))
}));