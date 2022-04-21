import * as React from 'react';
import css from './Footer.module.scss';
import {useState} from "react";

type FooterProps = {};

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={css.root}>
      <div className={css.contacts}>
        <div className={css.title}>
          Контакты
        </div>
        <div className={css.contactsLinks}>
          <a href='#'>
            Обратная связь
          </a>
          <a href='./contacts'>
            Связаться с нами
          </a>
        </div>
      </div>
      <div className={css.links}>
        <a href='https://vk.com/kfc_battle' target={"_blank"}>
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.2425 1.75749C21.4954 2.47939e-06 18.6668 0 13.02 0H11.98C6.33318 0 3.50456 2.47939e-06 1.75747 1.75749C0.0103861 3.51498 0 6.33321 0 11.98V13.02C0 18.6668 -1.33887e-05 21.4954 1.75747 23.2425C3.51496 24.9896 6.33318 25 11.98 25H13.02C18.6668 25 21.4954 25 23.2425 23.2425C24.9896 21.485 25 18.6668 25 13.02V11.98C24.9688 6.33321 24.9688 3.50458 23.2425 1.75749ZM17.9492 17.9805C17.6695 17.0105 17.1134 16.143 16.3489 15.4837C15.5844 14.8244 14.6445 14.402 13.6439 14.2679V17.9805H13.3215C7.63311 17.9805 4.38852 14.0807 4.25332 7.58112H7.10275C7.19634 12.344 9.297 14.3615 10.9609 14.7775V7.58112H13.6439V11.7409C15.287 11.5641 17.0133 9.66097 17.5957 7.6331H20.2787C20.0613 8.70451 19.6249 9.71945 18.9967 10.6142C18.3686 11.509 17.5623 12.2643 16.6285 12.8328C17.6669 13.3496 18.5844 14.08 19.321 14.9761C20.0576 15.8721 20.5965 16.9136 20.9027 18.0324L17.9492 17.9805Z" fill="white"/>
          </svg>
        </a>
        <a href='https://www.tiktok.com/@kfc_battle' target={"_blank"}>
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.02 0C18.6668 0 21.4954 2.34161e-06 23.2425 1.75749C24.9533 3.48889 24.9687 6.2825 24.9992 11.8286L25 11.9801V13.02C25 18.6668 24.9896 21.485 23.2425 23.2425C21.4954 25 18.6668 25 13.02 25H11.98C6.33319 25 3.51496 24.9896 1.75747 23.2425C0 21.4954 0 18.6669 0 13.0201V13.02V11.9801C0 6.33321 0.010386 3.51498 1.75747 1.75749C3.50456 2.34161e-06 6.33319 0 11.98 0H13.02ZM16.2025 4.3504C16.1529 4.09351 16.1279 3.83276 16.1276 3.57144H12.9594L12.9542 15.8751C12.9013 17.2529 11.7304 18.3584 10.2961 18.3584C9.86553 18.3586 9.44138 18.2569 9.06052 18.0622C8.63029 17.8437 8.26988 17.5153 8.01825 17.1127C7.76662 16.7101 7.63335 16.2485 7.63284 15.7778C7.63366 15.0936 7.91452 14.4377 8.41381 13.9539C8.9131 13.4702 9.59004 13.198 10.2961 13.1972C10.5701 13.1972 10.8331 13.2408 11.082 13.3167V10.9094V10.1826C10.8217 10.1468 10.5591 10.1283 10.2961 10.1271C7.08045 10.1271 4.46428 12.6624 4.46428 15.7783C4.46428 17.6896 5.45013 19.3815 6.95402 20.4046C7.93232 21.0719 9.09974 21.4296 10.2961 21.4286C13.5118 21.4286 16.1276 18.8937 16.1276 15.7778V9.5389C17.4117 10.4338 18.954 10.9143 20.5357 10.9124L20.5357 8.52647V7.84269C19.6836 7.84346 18.8497 7.60335 18.1363 7.1518L18.1354 7.1508C17.6344 6.83509 17.2048 6.42416 16.8726 5.94287C16.5403 5.46159 16.3124 4.91955 16.2025 4.3504ZM5.76924 18.5657C6.03514 19.2414 6.43524 19.8671 6.95402 20.4046C6.44564 19.8756 6.04013 19.2526 5.76924 18.5657Z" fill="white"/>
          </svg>
        </a>
        <a href='https://www.instagram.com/kfc_battle/' target={"_blank"}>
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.9964 6.49512V18.3824C25.0012 18.4162 25.0012 18.4506 24.9964 18.4845C24.9964 18.7806 24.9353 19.0768 24.8843 19.373C24.6423 20.6123 24.0636 21.7608 23.2117 22.692C22.1122 23.9314 20.6013 24.7296 18.959 24.9387L18.4286 25H6.55761H6.45563C5.96476 24.9705 5.47887 24.8848 5.00745 24.7447C4.00083 24.4597 3.07511 23.942 2.30485 23.2333C1.06785 22.136 0.270597 20.6264 0.0611912 18.9849L0 18.4539V6.56658C0.00574676 6.52935 0.00574676 6.49148 0 6.45426C0 6.20916 0.0509925 5.95384 0.0917864 5.70874C0.371528 4.14594 1.1822 2.72804 2.38644 1.69527C3.40796 0.795751 4.677 0.226207 6.02729 0.061272L6.53722 0H18.4286H18.5306C18.8672 0 19.2037 0.0715019 19.5505 0.142989C20.7124 0.39031 21.7888 0.939793 22.6712 1.73612C23.9313 2.8363 24.7412 4.36376 24.9454 6.02532C24.9964 6.14787 24.9964 6.35214 24.9964 6.49512ZM12.4931 19.3832C14.3271 19.3859 16.0875 18.6611 17.3891 17.3673C18.6907 16.0734 19.4275 14.316 19.4383 12.4796C19.4358 10.65 18.7144 8.89482 17.4301 7.59346C16.1458 6.29211 14.4017 5.54907 12.5747 5.52492C11.6563 5.5141 10.7449 5.68609 9.89339 6.03087C9.04189 6.37565 8.26727 6.88636 7.6145 7.53337C6.96172 8.18039 6.4438 8.95082 6.0908 9.79991C5.7378 10.649 5.55675 11.5598 5.55816 12.4796C5.56626 14.3151 6.3008 16.0725 7.60078 17.3666C8.90075 18.6607 10.6601 19.3859 12.4931 19.3832ZM22.2123 4.06455C22.2096 3.69606 22.063 3.34326 21.8037 3.08174C21.5445 2.82022 21.1932 2.67079 20.8253 2.66546C20.4582 2.66813 20.107 2.8153 19.8475 3.0752C19.5879 3.33509 19.4409 3.6868 19.4383 4.05433C19.4369 4.23758 19.4718 4.41929 19.5409 4.58898C19.61 4.75867 19.712 4.91298 19.8409 5.04304C19.9698 5.17309 20.1232 5.27631 20.2921 5.34675C20.4611 5.41718 20.6423 5.45343 20.8253 5.45343C21.1854 5.45104 21.5307 5.3095 21.7891 5.05834C22.0475 4.80717 22.1991 4.46577 22.2123 4.10538V4.06455Z" fill="white"/>
            <path d="M12.493 16.6152C11.3955 16.6125 10.3433 16.1769 9.56444 15.4027C8.78556 14.6285 8.34276 13.5781 8.33203 12.4792C8.33203 11.3741 8.77042 10.3143 9.55075 9.53286C10.3311 8.75146 11.3894 8.3125 12.493 8.3125C13.5966 8.3125 14.6549 8.75146 15.4353 9.53286C16.2156 10.3143 16.654 11.3741 16.654 12.4792C16.6432 13.5781 16.2005 14.6285 15.4216 15.4027C14.6427 16.1769 13.5905 16.6125 12.493 16.6152Z" fill="white"/>
          </svg>
        </a>
      </div>
      <div className={css.copyright}>
        <div className={css.mobLinks}>
          <a href='#'>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.2425 1.75749C21.4954 2.47939e-06 18.6668 0 13.02 0H11.98C6.33318 0 3.50456 2.47939e-06 1.75747 1.75749C0.0103861 3.51498 0 6.33321 0 11.98V13.02C0 18.6668 -1.33887e-05 21.4954 1.75747 23.2425C3.51496 24.9896 6.33318 25 11.98 25H13.02C18.6668 25 21.4954 25 23.2425 23.2425C24.9896 21.485 25 18.6668 25 13.02V11.98C24.9688 6.33321 24.9688 3.50458 23.2425 1.75749ZM17.9492 17.9805C17.6695 17.0105 17.1134 16.143 16.3489 15.4837C15.5844 14.8244 14.6445 14.402 13.6439 14.2679V17.9805H13.3215C7.63311 17.9805 4.38852 14.0807 4.25332 7.58112H7.10275C7.19634 12.344 9.297 14.3615 10.9609 14.7775V7.58112H13.6439V11.7409C15.287 11.5641 17.0133 9.66097 17.5957 7.6331H20.2787C20.0613 8.70451 19.6249 9.71945 18.9967 10.6142C18.3686 11.509 17.5623 12.2643 16.6285 12.8328C17.6669 13.3496 18.5844 14.08 19.321 14.9761C20.0576 15.8721 20.5965 16.9136 20.9027 18.0324L17.9492 17.9805Z" fill="white"/>
            </svg>
          </a>
          <a href='#'>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.02 0C18.6668 0 21.4954 2.34161e-06 23.2425 1.75749C24.9533 3.48889 24.9687 6.2825 24.9992 11.8286L25 11.9801V13.02C25 18.6668 24.9896 21.485 23.2425 23.2425C21.4954 25 18.6668 25 13.02 25H11.98C6.33319 25 3.51496 24.9896 1.75747 23.2425C0 21.4954 0 18.6669 0 13.0201V13.02V11.9801C0 6.33321 0.010386 3.51498 1.75747 1.75749C3.50456 2.34161e-06 6.33319 0 11.98 0H13.02ZM16.2025 4.3504C16.1529 4.09351 16.1279 3.83276 16.1276 3.57144H12.9594L12.9542 15.8751C12.9013 17.2529 11.7304 18.3584 10.2961 18.3584C9.86553 18.3586 9.44138 18.2569 9.06052 18.0622C8.63029 17.8437 8.26988 17.5153 8.01825 17.1127C7.76662 16.7101 7.63335 16.2485 7.63284 15.7778C7.63366 15.0936 7.91452 14.4377 8.41381 13.9539C8.9131 13.4702 9.59004 13.198 10.2961 13.1972C10.5701 13.1972 10.8331 13.2408 11.082 13.3167V10.9094V10.1826C10.8217 10.1468 10.5591 10.1283 10.2961 10.1271C7.08045 10.1271 4.46428 12.6624 4.46428 15.7783C4.46428 17.6896 5.45013 19.3815 6.95402 20.4046C7.93232 21.0719 9.09974 21.4296 10.2961 21.4286C13.5118 21.4286 16.1276 18.8937 16.1276 15.7778V9.5389C17.4117 10.4338 18.954 10.9143 20.5357 10.9124L20.5357 8.52647V7.84269C19.6836 7.84346 18.8497 7.60335 18.1363 7.1518L18.1354 7.1508C17.6344 6.83509 17.2048 6.42416 16.8726 5.94287C16.5403 5.46159 16.3124 4.91955 16.2025 4.3504ZM5.76924 18.5657C6.03514 19.2414 6.43524 19.8671 6.95402 20.4046C6.44564 19.8756 6.04013 19.2526 5.76924 18.5657Z" fill="white"/>
            </svg>
          </a>
          <a href='#'>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.9964 6.49512V18.3824C25.0012 18.4162 25.0012 18.4506 24.9964 18.4845C24.9964 18.7806 24.9353 19.0768 24.8843 19.373C24.6423 20.6123 24.0636 21.7608 23.2117 22.692C22.1122 23.9314 20.6013 24.7296 18.959 24.9387L18.4286 25H6.55761H6.45563C5.96476 24.9705 5.47887 24.8848 5.00745 24.7447C4.00083 24.4597 3.07511 23.942 2.30485 23.2333C1.06785 22.136 0.270597 20.6264 0.0611912 18.9849L0 18.4539V6.56658C0.00574676 6.52935 0.00574676 6.49148 0 6.45426C0 6.20916 0.0509925 5.95384 0.0917864 5.70874C0.371528 4.14594 1.1822 2.72804 2.38644 1.69527C3.40796 0.795751 4.677 0.226207 6.02729 0.061272L6.53722 0H18.4286H18.5306C18.8672 0 19.2037 0.0715019 19.5505 0.142989C20.7124 0.39031 21.7888 0.939793 22.6712 1.73612C23.9313 2.8363 24.7412 4.36376 24.9454 6.02532C24.9964 6.14787 24.9964 6.35214 24.9964 6.49512ZM12.4931 19.3832C14.3271 19.3859 16.0875 18.6611 17.3891 17.3673C18.6907 16.0734 19.4275 14.316 19.4383 12.4796C19.4358 10.65 18.7144 8.89482 17.4301 7.59346C16.1458 6.29211 14.4017 5.54907 12.5747 5.52492C11.6563 5.5141 10.7449 5.68609 9.89339 6.03087C9.04189 6.37565 8.26727 6.88636 7.6145 7.53337C6.96172 8.18039 6.4438 8.95082 6.0908 9.79991C5.7378 10.649 5.55675 11.5598 5.55816 12.4796C5.56626 14.3151 6.3008 16.0725 7.60078 17.3666C8.90075 18.6607 10.6601 19.3859 12.4931 19.3832ZM22.2123 4.06455C22.2096 3.69606 22.063 3.34326 21.8037 3.08174C21.5445 2.82022 21.1932 2.67079 20.8253 2.66546C20.4582 2.66813 20.107 2.8153 19.8475 3.0752C19.5879 3.33509 19.4409 3.6868 19.4383 4.05433C19.4369 4.23758 19.4718 4.41929 19.5409 4.58898C19.61 4.75867 19.712 4.91298 19.8409 5.04304C19.9698 5.17309 20.1232 5.27631 20.2921 5.34675C20.4611 5.41718 20.6423 5.45343 20.8253 5.45343C21.1854 5.45104 21.5307 5.3095 21.7891 5.05834C22.0475 4.80717 22.1991 4.46577 22.2123 4.10538V4.06455Z" fill="white"/>
              <path d="M12.493 16.6152C11.3955 16.6125 10.3433 16.1769 9.56444 15.4027C8.78556 14.6285 8.34276 13.5781 8.33203 12.4792C8.33203 11.3741 8.77042 10.3143 9.55075 9.53286C10.3311 8.75146 11.3894 8.3125 12.493 8.3125C13.5966 8.3125 14.6549 8.75146 15.4353 9.53286C16.2156 10.3143 16.654 11.3741 16.654 12.4792C16.6432 13.5781 16.2005 14.6285 15.4216 15.4027C14.6427 16.1769 13.5905 16.6125 12.493 16.6152Z" fill="white"/>
            </svg>
          </a>
        </div>
        © 2021 KFC International <br/> Holdings Inc.
      </div>
    </footer>
  );
};
