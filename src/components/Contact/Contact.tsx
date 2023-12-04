import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

const Contact = () => {
  const form: any = useRef();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    if (data) {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_PUBLIC_KEY,
        )
        .then(
          (result) => {
            console.log(result.text);
            reset();
          },
          (error) => {
            console.log(error.text);
          },
        );
    }
  };

  return (
    <section className={styles.contact} id='contact'>
      <h2>Get in touch with us</h2>
      <div className={styles.container}>
        <form
          ref={form}
          className={styles.contactForm}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.inputContainer}>
            <label>First name</label>
            <input
              className={`${
                errors.message?.type === 'required' && styles.inputError
              }`}
              type='text'
              placeholder='First name'
              {...register('firstName', { required: true, maxLength: 40 })}
            />
            {errors.firstName?.type === 'required' && (
              <p className={styles.error}>First name is required</p>
            )}
            {errors.firstName?.type === 'maxLength' && (
              <p className={styles.error}>
                First name must be smaller than 40 characters
              </p>
            )}
          </div>
          <div className={styles.inputContainer}>
            <label>Last name</label>
            <input
              className={`${
                errors.message?.type === 'required' && styles.inputError
              }`}
              type='text'
              placeholder='Last name'
              {...register('lastName', { required: true, maxLength: 35 })}
            />
            {errors.lastName?.type === 'required' && (
              <p className={styles.error}>Last name is required</p>
            )}
            {errors.lastName?.type === 'maxLength' && (
              <p className={styles.error}>
                Last name must be smaller than 35 characters
              </p>
            )}
          </div>
          <div className={styles.inputContainer}>
            <label>E-mail</label>
            <input
              className={`${
                errors.message?.type === 'required' && styles.inputError
              }`}
              type='text'
              placeholder='E-mail'
              {...register('email', {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors.email?.type === 'required' && (
              <p className={styles.error}>E-mail is required</p>
            )}
            {errors.email?.type === 'pattern' && (
              <p className={styles.error}>Write a valid E-mail</p>
            )}
          </div>
          <div className={styles.inputContainer}>
            <label>Phone</label>
            <input
              type='text'
              placeholder='Phone'
              {...register('phone', { maxLength: 20 })}
            />
            {errors.phone?.type === 'maxLength' && (
              <p className={styles.error}>
                Phone must be smaller than 20 characters
              </p>
            )}
          </div>
          <div className={styles.inputContainer}>
            <label>Message</label>
            <textarea
              className={`${
                errors.message?.type === 'required' && styles.inputError
              }`}
              placeholder='Write your message here'
              {...register('message', { required: true, maxLength: 3000 })}
            ></textarea>
            {errors.message?.type === 'required' && (
              <p className={styles.error}>Message is required</p>
            )}
            {errors.message?.type === 'maxLength' && (
              <p className={styles.error}>
                Message must be smaller than 20 characters
              </p>
            )}
          </div>
          <input
            type='submit'
            value='Send'
            className={`cta__btn ${styles.btn}`}
          />
        </form>
        <div className={styles.socials}>
          <div className={styles.social}>
            <img src='' alt='instagram icon' />
            <p>instagram:</p>
            <p>PaletteHeaven</p>
          </div>
          <div className={styles.social}>
            <img src='' alt='instagram icon' />
            <p>instagram:</p>
            <p>PaletteHeaven</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
