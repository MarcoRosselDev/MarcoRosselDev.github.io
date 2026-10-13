#!/usr/bin/env python3
"""
Genera el CV en PDF (inglés y español) desde una sola estructura de datos.

Diseño pensado para sistemas de filtrado (ATS): una sola columna, texto real
seleccionable, sin imágenes ni tablas de datos, encabezados estándar.

Uso:
    pip install reportlab
    python build_cv.py                 # crea Marco-Rossel-CV-EN.pdf y -ES.pdf
    python build_cv.py ./public/cv     # ...en esa carpeta
"""
import sys
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import (
    HRFlowable, KeepTogether, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle,
)

# ───────────── Datos que no cambian con el idioma ─────────────
NAME = "Marco Rossel"
EMAIL = "andresmarcorossel@gmail.com"
PHONE_ES = "+56 9 2941 1898"  # solo en la versión en español (postulaciones en Chile)
LOCATION = "Concepción, Chile"

GITHUB_URL = "https://github.com/MarcoRosselDev"
LINKEDIN_URL = "https://www.linkedin.com/in/marco-rossel-378b85256/"
PORTFOLIO_URL = "https://marcorosseldev.github.io"  # ← ajusta cuando publiques la web

V2_DEMO = "https://english-verbs-v2.vercel.app/"
V2_REPO = "https://github.com/MarcoRosselDev/english-verbs-v2"  # ← verifica el nombre real
V1_DEMO = "https://englishverb-conjugation.netlify.app/"
V1_REPO = "https://github.com/MarcoRosselDev/English-verbs"

ACCENT = colors.HexColor("#047857")
INK = colors.HexColor("#1c1917")
MUTED = colors.HexColor("#57534e")
LINE = colors.HexColor("#d6d3d1")


def short(url: str) -> str:
    """Quita https:// y la barra final, para mostrar la URL compacta."""
    return url.removeprefix("https://").removeprefix("www.").rstrip("/")


# ───────────── Contenido por idioma ─────────────
DATA = {
    "en": {
        "role": "Full-stack developer · Front-end focus",
        "phone": None,
        "summary": (
            "Full-stack developer with a front-end focus (React, TypeScript, Next.js, PostgreSQL). "
            "About five years of self-directed learning and project building. Architecture-trained, "
            "so I bring a strong sense of structure, space, and design to the interfaces I build. "
            "Looking for a front-end or full-stack role, remote or on-site."
        ),
        "h_summary": "Summary",
        "h_projects": "Projects",
        "h_skills": "Skills",
        "h_education": "Education",
        "projects": [
            {
                "title": "Verb Conjugator v2",
                "stack": "Next.js, TypeScript, PostgreSQL, Tailwind CSS, Vitest",
                "links": [("Live demo", V2_DEMO), ("Source", V2_REPO)],
                "bullets": [
                    "Full-stack app to search English verbs by any form or by Spanish translation, with user accounts and role-based permissions.",
                    "Own authentication: bcrypt hashing, signed JWT in httpOnly cookies, and permissions enforced on the server.",
                    "Ranked search with trigram indexes; debounced, cancellable requests.",
                    "Automated tests and CI on GitHub Actions; deployed on Vercel and Neon.",
                ],
            },
            {
                "title": "Verb Conjugator v1",
                "stack": "React, TypeScript, FastAPI, PostgreSQL",
                "links": [("Live demo", V1_DEMO), ("Source", V1_REPO)],
                "bullets": [
                    "Original version: REST API with FastAPI and PostgreSQL, React and TypeScript interface with search, light/dark theme, and CRUD.",
                ],
            },
            {
                "title": "Anti-Ratas",
                "stack": "Python, Node.js, GitHub REST API",
                "links": [],
                "bullets": [
                    "CLI tool, implemented in Python and Node.js, that finds accounts that don't follow you back using the GitHub API; includes dry-run mode, whitelist, and history log.",
                ],
            },
        ],
        "skills": [
            ("Front-end", "React, TypeScript, Next.js, Tailwind CSS, Three.js"),
            ("Back-end", "FastAPI, Express, Node.js, REST APIs, JWT authentication"),
            ("Databases", "PostgreSQL, MongoDB"),
            ("Tools", "Git, GitHub Actions, Vitest, Vercel, Neon"),
            ("Languages", "Spanish (native), English (B2)"),
        ],
        "education": [
            ("Architecture studies", "Universidad del Bío-Bío", "2017–2023", "All coursework completed"),
        ],
        "meta_title": "Marco Rossel – CV",
        "meta_subject": "Curriculum vitae – Full-stack developer",
    },
    "es": {
        "role": "Desarrollador full-stack · Foco en front-end",
        "phone": PHONE_ES,
        "summary": (
            "Desarrollador full-stack con foco en front-end (React, TypeScript, Next.js, PostgreSQL). "
            "Cerca de cinco años de aprendizaje autodidacta y desarrollo de proyectos. Formado en "
            "arquitectura, aporto sentido de estructura, espacio y diseño a las interfaces que construyo. "
            "Busco un puesto front-end o full-stack, remoto o presencial."
        ),
        "h_summary": "Resumen",
        "h_projects": "Proyectos",
        "h_skills": "Habilidades",
        "h_education": "Formación",
        "projects": [
            {
                "title": "Verb Conjugator v2",
                "stack": "Next.js, TypeScript, PostgreSQL, Tailwind CSS, Vitest",
                "links": [("Demo en vivo", V2_DEMO), ("Código", V2_REPO)],
                "bullets": [
                    "Aplicación full-stack para buscar verbos en inglés por cualquiera de sus formas o por su traducción al español, con cuentas de usuario y permisos por rol.",
                    "Autenticación propia: hash con bcrypt, JWT firmado en cookies httpOnly y permisos aplicados en el servidor.",
                    "Búsqueda con ranking de relevancia e índices trigram; peticiones diferidas y cancelables.",
                    "Tests automatizados y CI en GitHub Actions; desplegado en Vercel y Neon.",
                ],
            },
            {
                "title": "Verb Conjugator v1",
                "stack": "React, TypeScript, FastAPI, PostgreSQL",
                "links": [("Demo en vivo", V1_DEMO), ("Código", V1_REPO)],
                "bullets": [
                    "Versión original: API REST con FastAPI y PostgreSQL, interfaz en React y TypeScript con búsqueda, tema claro/oscuro y CRUD.",
                ],
            },
            {
                "title": "Anti-Ratas",
                "stack": "Python, Node.js, API REST de GitHub",
                "links": [],
                "bullets": [
                    "Herramienta CLI, implementada en Python y Node.js, que encuentra cuentas que no te siguen de vuelta usando la API de GitHub; incluye modo simulación, lista blanca e historial.",
                ],
            },
        ],
        "skills": [
            ("Front-end", "React, TypeScript, Next.js, Tailwind CSS, Three.js"),
            ("Back-end", "FastAPI, Express, Node.js, REST APIs, autenticación JWT"),
            ("Bases de datos", "PostgreSQL, MongoDB"),
            ("Herramientas", "Git, GitHub Actions, Vitest, Vercel, Neon"),
            ("Idiomas", "Español (nativo), Inglés (B2)"),
        ],
        "education": [
            ("Arquitectura", "Universidad del Bío-Bío", "2017–2023", "Egresado"),
        ],
        "meta_title": "Marco Rossel – CV",
        "meta_subject": "Curriculum vitae – Desarrollador full-stack",
    },
}

# ───────────── Estilos ─────────────
BASE = dict(fontName="Helvetica", textColor=INK)

S = {
    "name": ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=24, leading=28, textColor=INK),
    "role": ParagraphStyle("role", fontName="Helvetica", fontSize=11, leading=15, textColor=ACCENT, spaceBefore=1),
    "contact": ParagraphStyle("contact", fontName="Helvetica", fontSize=9, leading=12.5, textColor=MUTED, spaceBefore=3),
    "h": ParagraphStyle("h", fontName="Helvetica-Bold", fontSize=9.6, leading=12.5, textColor=ACCENT, spaceBefore=14, spaceAfter=0),
    "body": ParagraphStyle("body", fontSize=10, leading=14, **BASE),
    "ptitle": ParagraphStyle("ptitle", fontName="Helvetica-Bold", fontSize=10.4, leading=13.5, textColor=INK),
    "pstack": ParagraphStyle("pstack", fontName="Helvetica", fontSize=9, leading=12, textColor=MUTED),
    "plinks": ParagraphStyle("plinks", fontName="Helvetica", fontSize=9, leading=13, textColor=MUTED, alignment=TA_RIGHT),
    "bullet": ParagraphStyle("bullet", fontSize=9.7, leading=13.2, leftIndent=11, bulletIndent=1, spaceBefore=1.6, **BASE),
    "skill": ParagraphStyle("skill", fontSize=9.7, leading=14, leftIndent=0, **BASE),
}


def link(text: str, url: str) -> str:
    return f'<link href="{url}" color="{ACCENT.hexval().replace("0x", "#")}">{text}</link>'


def heading(text: str):
    # Línea fina debajo del título de sección; no es texto, no estorba al lector de ATS
    return [
        Paragraph(text.upper(), S["h"]),
        HRFlowable(width="100%", thickness=0.6, color=LINE, spaceBefore=2, spaceAfter=5),
    ]


def project_block(p: dict, width: float):
    links = "  ·  ".join(link(label, url) for label, url in p["links"])
    head = Table(
        [[
            [Paragraph(p["title"], S["ptitle"]), Paragraph(p["stack"], S["pstack"])],
            Paragraph(links, S["plinks"]),
        ]],
        colWidths=[width * 0.68, width * 0.32],
        hAlign="LEFT",
    )
    head.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 1),
    ]))
    items = [head] + [Paragraph(b, S["bullet"], bulletText="•") for b in p["bullets"]]
    return KeepTogether(items + [Spacer(1, 8)])  # no parte un proyecto entre dos páginas


def build(lang: str, out_dir: Path) -> Path:
    d = DATA[lang]
    path = out_dir / f"Marco-Rossel-CV-{lang.upper()}.pdf"

    doc = SimpleDocTemplate(
        str(path),
        pagesize=A4,
        leftMargin=18 * mm, rightMargin=18 * mm, topMargin=16 * mm, bottomMargin=14 * mm,
        title=d["meta_title"], author=NAME, subject=d["meta_subject"], creator=NAME,
    )
    width = doc.width - 12  # el marco trae 6 pt de relleno por lado

    # Línea de contacto: separadores " | " simples, fáciles de leer para un parser
    parts = [d["phone"], LOCATION, link(EMAIL, f"mailto:{EMAIL}")]  # phone es None en inglés
    line1 = "  |  ".join(x for x in parts if x)
    line2 = "  |  ".join([
        link(short(GITHUB_URL), GITHUB_URL),
        link(short(LINKEDIN_URL), LINKEDIN_URL),
        link(short(PORTFOLIO_URL), PORTFOLIO_URL),
    ])

    story = [
        Paragraph(NAME, S["name"]),
        Paragraph(d["role"], S["role"]),
        Paragraph(line1, S["contact"]),
        Paragraph(line2, S["contact"]),
    ]

    story += heading(d["h_summary"])
    story.append(Paragraph(d["summary"], S["body"]))

    story += heading(d["h_projects"])
    for p in d["projects"]:
        story.append(project_block(p, width))

    story += heading(d["h_skills"])
    for label, items in d["skills"]:
        story.append(Paragraph(f"<b>{label}:</b> {items}", S["skill"]))

    story += heading(d["h_education"])
    for program, school, period, note in d["education"]:
        story.append(Paragraph(f"<b>{program}</b>, {school}  |  {period}  |  {note}", S["skill"]))

    doc.build(story)
    return path


if __name__ == "__main__":
    out = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(".")
    out.mkdir(parents=True, exist_ok=True)
    for code in ("en", "es"):
        print("Creado:", build(code, out))
