--
-- PostgreSQL database dump
--

-- Dumped from database version 16.8 (Debian 16.8-1.pgdg120+1)
-- Dumped by pg_dump version 17.4

-- Started on 2025-05-20 18:21:58

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 220 (class 1259 OID 16421)
-- Name: citas; Type: TABLE; Schema: public; Owner: gestion_medica_user
--

CREATE TABLE public.citas (
    id integer NOT NULL,
    paciente_id integer,
    medico_id integer,
    fecha_hora timestamp without time zone NOT NULL,
    estado character varying(20) DEFAULT 'programada'::character varying,
    CONSTRAINT citas_estado_check CHECK (((estado)::text = ANY ((ARRAY['programada'::character varying, 'completada'::character varying, 'cancelada'::character varying])::text[])))
);


ALTER TABLE public.citas OWNER TO gestion_medica_user;

--
-- TOC entry 219 (class 1259 OID 16420)
-- Name: citas_id_seq; Type: SEQUENCE; Schema: public; Owner: gestion_medica_user
--

CREATE SEQUENCE public.citas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.citas_id_seq OWNER TO gestion_medica_user;

--
-- TOC entry 3396 (class 0 OID 0)
-- Dependencies: 219
-- Name: citas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gestion_medica_user
--

ALTER SEQUENCE public.citas_id_seq OWNED BY public.citas.id;


--
-- TOC entry 222 (class 1259 OID 16440)
-- Name: consultas; Type: TABLE; Schema: public; Owner: gestion_medica_user
--

CREATE TABLE public.consultas (
    id integer NOT NULL,
    cita_id integer,
    sintomas text,
    diagnostico text,
    tratamiento text,
    notas text
);


ALTER TABLE public.consultas OWNER TO gestion_medica_user;

--
-- TOC entry 221 (class 1259 OID 16439)
-- Name: consultas_id_seq; Type: SEQUENCE; Schema: public; Owner: gestion_medica_user
--

CREATE SEQUENCE public.consultas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.consultas_id_seq OWNER TO gestion_medica_user;

--
-- TOC entry 3397 (class 0 OID 0)
-- Dependencies: 221
-- Name: consultas_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gestion_medica_user
--

ALTER SEQUENCE public.consultas_id_seq OWNED BY public.consultas.id;


--
-- TOC entry 218 (class 1259 OID 16412)
-- Name: medicos; Type: TABLE; Schema: public; Owner: gestion_medica_user
--

CREATE TABLE public.medicos (
    id integer NOT NULL,
    nombre character varying(100) NOT NULL,
    apellido character varying(100) NOT NULL,
    especialidad character varying(100),
    correo character varying(150),
    telefono character varying(20)
);


ALTER TABLE public.medicos OWNER TO gestion_medica_user;

--
-- TOC entry 217 (class 1259 OID 16411)
-- Name: medicos_id_seq; Type: SEQUENCE; Schema: public; Owner: gestion_medica_user
--

CREATE SEQUENCE public.medicos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.medicos_id_seq OWNER TO gestion_medica_user;

--
-- TOC entry 3398 (class 0 OID 0)
-- Dependencies: 217
-- Name: medicos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gestion_medica_user
--

ALTER SEQUENCE public.medicos_id_seq OWNED BY public.medicos.id;


--
-- TOC entry 216 (class 1259 OID 16400)
-- Name: pacientes; Type: TABLE; Schema: public; Owner: gestion_medica_user
--

CREATE TABLE public.pacientes (
    id integer NOT NULL,
    nombre character varying(100) NOT NULL,
    apellido character varying(100) NOT NULL,
    fecha_nacimiento date NOT NULL,
    sexo character varying(10),
    correo character varying(150),
    telefono character varying(20),
    direccion text,
    CONSTRAINT pacientes_sexo_check CHECK (((sexo)::text = ANY ((ARRAY['Masculino'::character varying, 'Femenino'::character varying, 'Otro'::character varying])::text[])))
);


ALTER TABLE public.pacientes OWNER TO gestion_medica_user;

--
-- TOC entry 215 (class 1259 OID 16399)
-- Name: pacientes_id_seq; Type: SEQUENCE; Schema: public; Owner: gestion_medica_user
--

CREATE SEQUENCE public.pacientes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pacientes_id_seq OWNER TO gestion_medica_user;

--
-- TOC entry 3399 (class 0 OID 0)
-- Dependencies: 215
-- Name: pacientes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: gestion_medica_user
--

ALTER SEQUENCE public.pacientes_id_seq OWNED BY public.pacientes.id;


--
-- TOC entry 3220 (class 2604 OID 16424)
-- Name: citas id; Type: DEFAULT; Schema: public; Owner: gestion_medica_user
--

ALTER TABLE ONLY public.citas ALTER COLUMN id SET DEFAULT nextval('public.citas_id_seq'::regclass);


--
-- TOC entry 3222 (class 2604 OID 16443)
-- Name: consultas id; Type: DEFAULT; Schema: public; Owner: gestion_medica_user
--

ALTER TABLE ONLY public.consultas ALTER COLUMN id SET DEFAULT nextval('public.consultas_id_seq'::regclass);


--
-- TOC entry 3219 (class 2604 OID 16415)
-- Name: medicos id; Type: DEFAULT; Schema: public; Owner: gestion_medica_user
--

ALTER TABLE ONLY public.medicos ALTER COLUMN id SET DEFAULT nextval('public.medicos_id_seq'::regclass);


--
-- TOC entry 3218 (class 2604 OID 16403)
-- Name: pacientes id; Type: DEFAULT; Schema: public; Owner: gestion_medica_user
--

ALTER TABLE ONLY public.pacientes ALTER COLUMN id SET DEFAULT nextval('public.pacientes_id_seq'::regclass);


--
-- TOC entry 3388 (class 0 OID 16421)
-- Dependencies: 220
-- Data for Name: citas; Type: TABLE DATA; Schema: public; Owner: gestion_medica_user
--

COPY public.citas (id, paciente_id, medico_id, fecha_hora, estado) FROM stdin;
\.


--
-- TOC entry 3390 (class 0 OID 16440)
-- Dependencies: 222
-- Data for Name: consultas; Type: TABLE DATA; Schema: public; Owner: gestion_medica_user
--

COPY public.consultas (id, cita_id, sintomas, diagnostico, tratamiento, notas) FROM stdin;
\.


--
-- TOC entry 3386 (class 0 OID 16412)
-- Dependencies: 218
-- Data for Name: medicos; Type: TABLE DATA; Schema: public; Owner: gestion_medica_user
--

COPY public.medicos (id, nombre, apellido, especialidad, correo, telefono) FROM stdin;
\.


--
-- TOC entry 3384 (class 0 OID 16400)
-- Dependencies: 216
-- Data for Name: pacientes; Type: TABLE DATA; Schema: public; Owner: gestion_medica_user
--

COPY public.pacientes (id, nombre, apellido, fecha_nacimiento, sexo, correo, telefono, direccion) FROM stdin;
\.


--
-- TOC entry 3400 (class 0 OID 0)
-- Dependencies: 219
-- Name: citas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gestion_medica_user
--

SELECT pg_catalog.setval('public.citas_id_seq', 1, false);


--
-- TOC entry 3401 (class 0 OID 0)
-- Dependencies: 221
-- Name: consultas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gestion_medica_user
--

SELECT pg_catalog.setval('public.consultas_id_seq', 1, false);


--
-- TOC entry 3402 (class 0 OID 0)
-- Dependencies: 217
-- Name: medicos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gestion_medica_user
--

SELECT pg_catalog.setval('public.medicos_id_seq', 1, false);


--
-- TOC entry 3403 (class 0 OID 0)
-- Dependencies: 215
-- Name: pacientes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: gestion_medica_user
--

SELECT pg_catalog.setval('public.pacientes_id_seq', 1, false);


--
-- TOC entry 3234 (class 2606 OID 16428)
-- Name: citas citas_pkey; Type: CONSTRAINT; Schema: public; Owner: gestion_medica_user
--

ALTER TABLE ONLY public.citas
    ADD CONSTRAINT citas_pkey PRIMARY KEY (id);


--
-- TOC entry 3236 (class 2606 OID 16447)
-- Name: consultas consultas_pkey; Type: CONSTRAINT; Schema: public; Owner: gestion_medica_user
--

ALTER TABLE ONLY public.consultas
    ADD CONSTRAINT consultas_pkey PRIMARY KEY (id);


--
-- TOC entry 3230 (class 2606 OID 16419)
-- Name: medicos medicos_correo_key; Type: CONSTRAINT; Schema: public; Owner: gestion_medica_user
--

ALTER TABLE ONLY public.medicos
    ADD CONSTRAINT medicos_correo_key UNIQUE (correo);


--
-- TOC entry 3232 (class 2606 OID 16417)
-- Name: medicos medicos_pkey; Type: CONSTRAINT; Schema: public; Owner: gestion_medica_user
--

ALTER TABLE ONLY public.medicos
    ADD CONSTRAINT medicos_pkey PRIMARY KEY (id);


--
-- TOC entry 3226 (class 2606 OID 16410)
-- Name: pacientes pacientes_correo_key; Type: CONSTRAINT; Schema: public; Owner: gestion_medica_user
--

ALTER TABLE ONLY public.pacientes
    ADD CONSTRAINT pacientes_correo_key UNIQUE (correo);


--
-- TOC entry 3228 (class 2606 OID 16408)
-- Name: pacientes pacientes_pkey; Type: CONSTRAINT; Schema: public; Owner: gestion_medica_user
--

ALTER TABLE ONLY public.pacientes
    ADD CONSTRAINT pacientes_pkey PRIMARY KEY (id);


--
-- TOC entry 3237 (class 2606 OID 16434)
-- Name: citas citas_medico_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gestion_medica_user
--

ALTER TABLE ONLY public.citas
    ADD CONSTRAINT citas_medico_id_fkey FOREIGN KEY (medico_id) REFERENCES public.medicos(id) ON DELETE CASCADE;


--
-- TOC entry 3238 (class 2606 OID 16429)
-- Name: citas citas_paciente_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gestion_medica_user
--

ALTER TABLE ONLY public.citas
    ADD CONSTRAINT citas_paciente_id_fkey FOREIGN KEY (paciente_id) REFERENCES public.pacientes(id) ON DELETE CASCADE;


--
-- TOC entry 3239 (class 2606 OID 16448)
-- Name: consultas consultas_cita_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: gestion_medica_user
--

ALTER TABLE ONLY public.consultas
    ADD CONSTRAINT consultas_cita_id_fkey FOREIGN KEY (cita_id) REFERENCES public.citas(id) ON DELETE CASCADE;


-- Completed on 2025-05-20 18:22:11

--
-- PostgreSQL database dump complete
--

