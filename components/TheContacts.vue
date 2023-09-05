<template>
    <div data-aos="fade-up" data-aos-delay="100" class="w-full max-w-[1440px] my-0 mx-auto" id="contacts-section">
        <div class="max-w-[1240px] my-0 mx-auto px-4 md:px-8 lg:pl-[113px] lg:mb-[80px] md:mb-[60px] mb-5">
            <div class="my-contacts">
                <h2 class="my-contacts-title font-montserrat font-semibold text-2xl md:text-[28px] lg:text-[32px] text-[#4E4747]">
                    {{ $t('contacts.title') }}
                </h2>
                <template v-for="(item, index) in ourContacts">
                    <div
                        :key="index"
                        class="flex flex-col"
                        :class="`my-contacts-${item.class}`"
                    >
                        <span class="font-fixel text-lg text-[#2B2B2B] font-medium">
                        {{ item.city }}
                        </span>
                        <span class="font-fixel font-normal text-[#4E4747]">
                            {{ item.street }}
                        </span>
                        <a v-if="item.map" :href="item.mapLink" class="arrow font-fixel text-sm md:text-base font-normal text-[#757575] flex cursor-pointer border-b border-white/0 hover:text-[#4E4747] hover:border-b hover:border-[#4E4747] hover:max-w-[186px]">
                            {{ item.map }} 
                        </a>

                        <a v-if="item.telephone" :href="`tel:${item.phoneLink}`" class="font-fixel text-sm md:text-base font-normal text-[#4E4747]">
                            {{ item.telephone }}
                        </a>
                        <span v-if="item.content" class="font-fixel text-sm md:text-base font-normal text-[#4E4747]">
                            {{ item.content }}
                        </span>
                        <span v-if="item.content" class="font-fixel text-sm md:text-base font-normal text-[#4E4747]">
                            {{ item.closed }}
                        </span>
                    </div>
                </template>
                <p class="font-fixel text-[#2B2B2B] font-normal max-w-[400px] pt-1 my-contacts-description">
                    {{ $t('contacts.paragraph') }}
                </p>
                <div class="my-contacts-photofirst flex max-h-[400px]">
                    <NuxtImg src="/img/Rectangle_left.webp" class=" w-full object-cover" alt="img" width="400px" height="400px"/>
                </div>
                <div class="my-contacts-photosecond flex max-h-[400px]">
                    <NuxtImg src="/img/Rectangle_right.webp" class=" w-full object-cover" alt="img" width="400px" height="400px"/>
                </div>
                <div class="flex flex-col justify-start mt-2 my-contacts-callback">
                    <span class=" font-fixel font-medium text-lg text-[#2B2B2B]">
                        {{$t('contacts.contact')}}
                    </span>
                    <a href="mailto:bellacasa.kyiv@gmail.com">
                        bellacasa.kyiv@gmail.com
                    </a>
                </div>
                <div class="flex gap-5 my-contacts-socials">
                    <a href="https://www.facebook.com/viktoriya.burbyga/" class="facebook flex w-[88px] h-[88px] items-center border border-[#F8B1AB] rounded-full justify-center hover:bg-[#F8B1AB] active:bg-[#F28B82] transition-colors">

                    </a>
                    <a href="https://www.instagram.com/salon_bella_casa" class="instagram flex w-[88px] h-[88px] items-center border border-[#F8B1AB] rounded-full justify-center hover:bg-[#F8B1AB] active:bg-[#F28B82] transition-colors">

                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheContacts',
    data(){
        return{
            ourContacts:[
                {
                    city: this.$t('contacts.city1'),
                    street:this.$t('contacts.street1'),
                    telephone:'+38 096 1353 553',
                    phoneLink:'+380961353553',
                    map:this.$t('contacts.map'),
                    mapLink: 'https://goo.gl/maps/Hd2haJLxeWaZR3aDA',
                    class: 'contact-1'
                },
                {
                    city:this.$t('contacts.city2'),
                    street:this.$t('contacts.street2'),
                    telephone:'+38 067 9714 864',
                    phoneLink:'+380679714864',
                    map:this.$t('contacts.map'),
                    mapLink: 'https://goo.gl/maps/gC6U9MmdghQSXMyJA',
                    class: 'contact-2'
                },
                {
                    city:this.$t('contacts.city3'),
                    street:this.$t('contacts.street3'),
                    telephone:'+38 097 2883 648',
                    phoneLink:'+380972883648',
                    map:this.$t('contacts.map'),
                    mapLink: 'https://goo.gl/maps/x81Xv8kGKpEiAFhg6 ',
                    class: 'contact-3'
                },
                {
                    city:this.$t('contacts.time'),
                    street:this.$t('contacts.monday'),
                    content:this.$t('contacts.saturday'),
                    closed:this.$t('contacts.sunday'),
                    class: 'contact-4'
                },
            ]
        }
    }
}
</script>
<style lang="scss">
    .facebook{
        &::before{
        content: "";
        display: block;
        mask-image: url('~/static/img/facebook.webp');
        width: 13.5px;
        height: 26px;
        mask-size: contain;
        background: #F8B1AB;
        transition: background 0.150s cubic-bezier(0.4, 0, 0.2, 1);
        }
        &:hover {
            &::before {
                background: #fff;
            }
        }
        &:active{
            &::before{
                background: #FFF;
            }
        }
    }
    .arrow{
    position: relative;
    &::before{
        content: "";
        display: block;
        mask-image: url('~/static/img/arrow-up-right.webp');
        width: 24px;
        height: 24px;
        mask-size: contain;
        background: #757575;
        mask-repeat: no-repeat;
        transition: background 0.150s cubic-bezier(0.4, 0, 0.2, 1);
        order: 1;
    }
    &:hover {
        &::before {
            background: #4E4747;
        }
    }
    &:active{
        &::before{
            background: #4E4747;
        }
    }
}
    
    .instagram{
        &::before{
        content: "";
        display: block;
        mask-image: url('~/static/img/instagram.webp');
        width: 28px;
        height: 28px;
        background: #F8B1AB;
        mask-size: contain;
        transition: background 0.150s cubic-bezier(0.4, 0, 0.2, 1);
        }
        &:hover {
            &::before {
                background: #FFF;
            }
        }
        &:active{
            &::before{
                background: #FFF;
            }
        }
    }
        
    
    .my-contacts {
        display: grid;
        grid-template-columns: minmax(200px, 275px) 1fr 1fr;
        gap: 25px 20px;
        grid-template-areas: "title title description"
            "contact-1 photofirst photosecond"
            'contact-2 photofirst photosecond'
            'contact-3 photofirst photosecond'
            'contact-4 callback socials';
            @media (max-width: 1024px) {
                grid-template-columns: 1fr 1fr;
                gap: 20px;
                grid-template-areas: "title description"
                "contact-1 photofirst"
                'contact-2 photofirst'
                'contact-3 photofirst'
                'contact-4 photosecond'
                'callback photosecond'
                'socials photosecond';
            }
            @media (max-width: 640px) {
                grid-template-columns: repeat(6, 1fr);
                gap: 20px;
                grid-template-areas: "title title title title title title"
                "contact-1 contact-1 contact-1 contact-1 contact-1 contact-1"
                'contact-2 contact-2 contact-2 contact-2 contact-2 contact-2'
                'contact-3 contact-3 contact-3 contact-3 contact-3 contact-3'
                'contact-4 contact-4 contact-4 contact-4 socials socials'
                'callback callback callback callback socials socials'
                'photofirst photofirst photofirst photosecond photosecond photosecond'
                'description description description description description description';
            }
        
        &-title {
            grid-area: title;
        }
        &-description {
            grid-area: description;
        }
        &-contact-1 {
            grid-area: contact-1;
        }
        &-contact-2 {
            grid-area: contact-2;
        }
        &-contact-3 {
            grid-area: contact-3;
        }
        &-contact-4 {
            grid-area: contact-4;
        }
        &-photofirst {
            grid-area: photofirst;
        }
        &-photosecond {
            grid-area: photosecond;
        }
        &-callback {
            grid-area: callback;
        }
        &-socials {
            grid-area: socials;
            margin-left: auto;
            @media (max-width: 1024px) {
                margin-left: initial;
            }
            @media (max-width: 640px) {
                flex-direction: column;
                margin-left: auto;
            }
        }
    }
</style>