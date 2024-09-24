'use client'
import Pagina from "@/app/components/Pagina";
import { Formik } from "formik";
import Link from "next/link";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";

export default function Page() {
    function salvar(dados){
        console.log(dados)
    }


    return (
        <Pagina titulo="Empresa">

            <Formik
                initialValues={{ nome: '', logo: '' }}
                onSubmit={values=>salvar(values)}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                }) => (
                    <Form>
                        <Form.Group className="mb-3" controlId="Nome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control 
                            type="text" 
                            name="Nome" 
                            value={values.nome}
                            onChange={handleChange('nome')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Logo">
                            <Form.Label>Logo</Form.Label>
                            <Form.Control 
                            type="text" 
                            name="logo" 
                            value={values.logo}
                            onChange={handleChange('logo')}
                            />
                        </Form.Group>
                        <div className="text-center">
                            <Button onClick={handleSubmit} variant="success">
                                Salvar <FaCheck />
                            </Button>
                            <Link
                                href="/empresas"
                                className="btn btn-primary ms-2"
                            >
                                <IoIosArrowBack /> Voltar
                            </Link>
                        </div>
                    </Form>
                )}
            </Formik>


        </Pagina>
    )
}

