import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { userLogin } from '../../utils/handleAPI';
import { useNavigate } from 'react-router-dom';

interface Inputs {
  email: string;
  password: string;
}

export default function LoginForm(): React.ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const navigate = useNavigate();

  const onSub: SubmitHandler<Inputs> = (data) => {
    const { email, password } = data;
    void userLogin(email, password);
    navigate('/');
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit(onSub)}>
        <input type="email" {...register('email')} />
        <input type="password" {...register('password')} />
        <button type="submit">loucura loucura loucura</button>
      </form>
    </>
  );
}
