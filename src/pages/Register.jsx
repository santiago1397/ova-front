import React, { useEffect, useState } from 'react'
import { useForm, useFieldArray } from 'react-hook-form';
import { ToastError } from '../components/toasts/ToastError.jsx'
import { ToastSuccess } from '../components/toasts/ToastSuccess.jsx'
import Dpt from '../components/dpt/Dpt.jsx'
import DatosTutor from '../components/datos/DatosTutor.jsx';
import DatosStudent from '../components/datos/DatosStudent.jsx';
import { addParticipant } from '../api/ova_endpoints.js';

export default function Register() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();


  const onSubmit = async (data) => {
    try {
      console.log(data)
      const res = await addParticipant(data)

      ToastSuccess("Registrado Exitosamente")

      reset() 
    } catch (error) {
      console.log(error)

      ToastError("Error al registrar")
    }

  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h2>
            REGISTRO OLIMPIADA NACIONAL DE ASTRONOMIA (OVA)
          </h2>
        </div>


        <DatosTutor
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
        />
        <DatosStudent
          register={register}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
        />

        <button>
          Cargar
        </button>
      </form>



    </div>
  )
}
