--
-- PostgreSQL database dump
--

-- Dumped from database version 16.9 (Debian 16.9-1.pgdg120+1)
-- Dumped by pg_dump version 17.4

-- Started on 2025-05-28 14:28:40

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 5 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: gestion_medica_4vey_user
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO gestion_medica_4vey_user;

--
-- TOC entry 219 (class 1259 OID 16472)
-- Name: citas_id_seq; Type: SEQUENCE; Schema: public; Owner: gestion_medica_4vey_user
--

CREATE SEQUENCE public.citas_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.citas_id_seq OWNER TO gestion_medica_4vey_user;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 16453)
-- Name: citas; Type: TABLE; Schema: public; Owner: gestion_medica_4vey_user
--

CREATE TABLE public.citas (
    id integer DEFAULT nextval('public.citas_id_seq'::regclass) NOT NULL,
    paciente_id integer,
    medico_id integer,
    fecha_hora timestamp without time zone NOT NULL,
    estado character varying(20) DEFAULT 'programada'::character varying,
    CONSTRAINT citas_estado_check CHECK (((estado)::text = ANY ((ARRAY['programada'::character varying, 'completada'::character varying, 'cancelada'::character varying])::text[])))
);


ALTER TABLE public.citas OWNER TO gestion_medica_4vey_user;

--
-- TOC entry 220 (class 1259 OID 16473)
-- Name: consultas_id_seq; Type: SEQUENCE; Schema: public; Owner: gestion_medica_4vey_user
--

CREATE SEQUENCE public.consultas_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.consultas_id_seq OWNER TO gestion_medica_4vey_user;

--
-- TOC entry 216 (class 1259 OID 16458)
-- Name: consultas; Type: TABLE; Schema: public; Owner: gestion_medica_4vey_user
--

CREATE TABLE public.consultas (
    id integer DEFAULT nextval('public.consultas_id_seq'::regclass) NOT NULL,
    cita_id integer,
    sintomas text,
    diagnostico text,
    tratamiento text,
    notas text
);


ALTER TABLE public.consultas OWNER TO gestion_medica_4vey_user;

--
-- TOC entry 221 (class 1259 OID 16474)
-- Name: medicos_id_seq; Type: SEQUENCE; Schema: public; Owner: gestion_medica_4vey_user
--

CREATE SEQUENCE public.medicos_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.medicos_id_seq OWNER TO gestion_medica_4vey_user;

--
-- TOC entry 217 (class 1259 OID 16463)
-- Name: medicos; Type: TABLE; Schema: public; Owner: gestion_medica_4vey_user
--

CREATE TABLE public.medicos (
    id integer DEFAULT nextval('public.medicos_id_seq'::regclass) NOT NULL,
    nombre character varying(100) NOT NULL,
    apellido character varying(100) NOT NULL,
    especialidad character varying(100),
    correo character varying(150),
    telefono character varying(20)
);


ALTER TABLE public.medicos OWNER TO gestion_medica_4vey_user;

--
-- TOC entry 222 (class 1259 OID 16475)
-- Name: pacientes_id_seq; Type: SEQUENCE; Schema: public; Owner: gestion_medica_4vey_user
--

CREATE SEQUENCE public.pacientes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pacientes_id_seq OWNER TO gestion_medica_4vey_user;

--
-- TOC entry 218 (class 1259 OID 16466)
-- Name: pacientes; Type: TABLE; Schema: public; Owner: gestion_medica_4vey_user
--

CREATE TABLE public.pacientes (
    id integer DEFAULT nextval('public.pacientes_id_seq'::regclass) NOT NULL,
    nombre character varying(100) NOT NULL,
    apellido character varying(100) NOT NULL,
    fecha_nacimiento date NOT NULL,
    sexo character varying(10),
    correo character varying(150),
    telefono character varying(20),
    direccion text,
    CONSTRAINT pacientes_sexo_check CHECK (((sexo)::text = ANY ((ARRAY['Masculino'::character varying, 'Femenino'::character varying, 'Otro'::character varying])::text[])))
);


ALTER TABLE public.pacientes OWNER TO gestion_medica_4vey_user;

--
-- TOC entry 3387 (class 0 OID 16453)
-- Dependencies: 215
-- Data for Name: citas; Type: TABLE DATA; Schema: public; Owner: gestion_medica_4vey_user
--

COPY public.citas (id, paciente_id, medico_id, fecha_hora, estado) FROM stdin;
1	1	1	2025-05-25 10:00:00	programada
2	2	2	2025-05-26 14:30:00	completada
3	3	3	2025-05-27 09:00:00	cancelada
4	4	1	2025-05-28 11:15:00	programada
\.


--
-- TOC entry 3388 (class 0 OID 16458)
-- Dependencies: 216
-- Data for Name: consultas; Type: TABLE DATA; Schema: public; Owner: gestion_medica_4vey_user
--

COPY public.consultas (id, cita_id, sintomas, diagnostico, tratamiento, notas) FROM stdin;
1	2	Fiebre, tos seca, dolor de garganta	Infección respiratoria leve	Reposo, hidratación, paracetamol	Controlar evolución en 3 días
2	4	Dolor en el pecho al respirar	Posible angina de pecho	Exámenes complementarios, evitar esfuerzo físico	Urgente seguimiento
\.


--
-- TOC entry 3389 (class 0 OID 16463)
-- Dependencies: 217
-- Data for Name: medicos; Type: TABLE DATA; Schema: public; Owner: gestion_medica_4vey_user
--

COPY public.medicos (id, nombre, apellido, especialidad, correo, telefono) FROM stdin;
1	Carlos	Lopez	Cardiología	carlos.lopez@email.com	555-1111
2	Sofía	Martínez	Pediatría	sofia.martinez@email.com	555-2222
3	Miguel	Torres	Dermatología	miguel.torres@email.com	555-3333
\.


--
-- TOC entry 3390 (class 0 OID 16466)
-- Dependencies: 218
-- Data for Name: pacientes; Type: TABLE DATA; Schema: public; Owner: gestion_medica_4vey_user
--

COPY public.pacientes (id, nombre, apellido, fecha_nacimiento, sexo, correo, telefono, direccion) FROM stdin;
1	Juan	Pérez	1980-05-10	Masculino	juan.perez@email.com	555-1234	Calle Falsa 123
2	María	Gómez	1992-08-22	Femenino	maria.gomez@email.com	555-5678	Avenida Siempre Viva 742
3	Luis	Ramírez	1975-12-30	Masculino	luis.ramirez@email.com	555-8765	Boulevard Central 456
4	Ana	Fernández	1988-03-15	Femenino	ana.fernandez@email.com	555-4321	Calle Luna 789
\.


--
-- TOC entry 3400 (class 0 OID 0)
-- Dependencies: 219
-- Name: citas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gestion_medica_4vey_user
--

SELECT pg_catalog.setval('public.citas_id_seq', 4, true);


--
-- TOC entry 3401 (class 0 OID 0)
-- Dependencies: 220
-- Name: consultas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gestion_medica_4vey_user
--

SELECT pg_catalog.setval('public.consultas_id_seq', 2, true);


--
-- TOC entry 3402 (class 0 OID 0)
-- Dependencies: 221
-- Name: medicos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gestion_medica_4vey_user
--

SELECT pg_catalog.setval('public.medicos_id_seq', 3, true);


--
-- TOC entry 3403 (class 0 OID 0)
-- Dependencies: 222
-- Name: pacientes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gestion_medica_4vey_user
--

SELECT pg_catalog.setval('public.pacientes_id_seq', 4, true);


--
-- TOC entry 3230 (class 2606 OID 16508)
-- Name: citas citas_pkey; Type: CONSTRAINT; Schema: public; Owner: gestion_medica_4vey_user
--

ALTER TABLE ONLY public.citas
    ADD CONSTRAINT citas_pkey PRIMARY KEY (id);


--
-- TOC entry 3232 (class 2606 OID 16510)
-- Name: consultas consultas_pkey; Type: CONSTRAINT; Schema: public; Owner: gestion_medica_4vey_user
--

ALTER TABLE ONLY public.consultas
    ADD CONSTRAINT consultas_pkey PRIMARY KEY (id);


--
-- TOC entry 3234 (class 2606 OID 16514)
-- Name: medicos medicos_correo_key; Type: CONSTRAINT; Schema: public; Owner: gestion_medica_4vey_user
--

ALTER TABLE ONLY public.medicos
    ADD CONSTRAINT medicos_correo_key UNIQUE (correo);


--
-- TOC entry 3236 (class 2606 OID 16512)
-- Name: medicos medicos_pkey; Type: CONSTRAINT; Schema: public; Owner: gestion_medica_4vey_user
--

ALTER TABLE ONLY public.medicos
    ADD CONSTRAINT medicos_pkey PRIMARY KEY (id);


--
-- TOC entry 3238 (class 2606 OID 16518)
-- Name: pacientes pacientes_correo_key; Type: CONSTRAINT; Schema: public; Owner: gestion_medica_4vey_user
--

ALTER TABLE ONLY public.pacientes
    ADD CONSTRAINT pacientes_correo_key UNIQUE (correo);


--
-- TOC entry 3240 (class 2606 OID 16516)
-- Name: pacientes pacientes_pkey; Type: CONSTRAINT; Schema: public; Owner: gestion_medica_4vey_user
--

ALTER TABLE ONLY public.pacientes
    ADD CONSTRAINT pacientes_pkey PRIMARY KEY (id);


--
-- TOC entry 3241 (class 2606 OID 16519)
-- Name: citas citas_medico_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gestion_medica_4vey_user
--

ALTER TABLE ONLY public.citas
    ADD CONSTRAINT citas_medico_id_fkey FOREIGN KEY (medico_id) REFERENCES public.medicos(id) ON DELETE CASCADE;


--
-- TOC entry 3242 (class 2606 OID 16524)
-- Name: citas citas_paciente_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gestion_medica_4vey_user
--

ALTER TABLE ONLY public.citas
    ADD CONSTRAINT citas_paciente_id_fkey FOREIGN KEY (paciente_id) REFERENCES public.pacientes(id) ON DELETE CASCADE;


--
-- TOC entry 3243 (class 2606 OID 16529)
-- Name: consultas consultas_cita_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gestion_medica_4vey_user
--

ALTER TABLE ONLY public.consultas
    ADD CONSTRAINT consultas_cita_id_fkey FOREIGN KEY (cita_id) REFERENCES public.citas(id) ON DELETE CASCADE;


--
-- TOC entry 2054 (class 826 OID 16391)
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON SEQUENCES TO gestion_medica_4vey_user;


--
-- TOC entry 2056 (class 826 OID 16393)
-- Name: DEFAULT PRIVILEGES FOR TYPES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON TYPES TO gestion_medica_4vey_user;


--
-- TOC entry 2055 (class 826 OID 16392)
-- Name: DEFAULT PRIVILEGES FOR FUNCTIONS; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON FUNCTIONS TO gestion_medica_4vey_user;


--
-- TOC entry 2053 (class 826 OID 16390)
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT SELECT,INSERT,REFERENCES,DELETE,TRIGGER,TRUNCATE,UPDATE ON TABLES TO gestion_medica_4vey_user;


-- Completed on 2025-05-28 14:28:52

--
-- PostgreSQL database dump complete
--

