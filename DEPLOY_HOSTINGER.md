# Deploiement automatique Hostinger (GitHub Actions)

Ce projet est configure pour se deployer automatiquement sur Hostinger a chaque push sur la branche main.

## 1) Pre-requis

- Un repository GitHub pour ce projet
- Un hebergement Hostinger actif
- Les identifiants FTPS Hostinger

## 2) Secrets GitHub a creer

Dans GitHub: Settings > Secrets and variables > Actions > New repository secret

Ajoute ces secrets:

- HOSTINGER_FTP_SERVER: hote FTP Hostinger (ex: ftp.votredomaine.com)
- HOSTINGER_FTP_USERNAME: utilisateur FTP
- HOSTINGER_FTP_PASSWORD: mot de passe FTP
- HOSTINGER_FTP_PORT: port FTPS (generalement 21)
- HOSTINGER_SERVER_DIR: dossier cible sur le serveur (ex: /public_html/)

## 3) Workflow inclus

Fichier: .github/workflows/deploy-hostinger.yml

Declenchement:

- Automatique sur push dans main
- Manuel via Actions > Deploy To Hostinger > Run workflow

## 4) Fichiers deployes

Le workflow envoie le site statique et exclut automatiquement les dossiers/fichiers de developpement:

- excludes: .git, .github, .vscode, node_modules, _.md, _.zip, package.json, package-lock.json

## 5) Premiere mise en route

1. Commit et push de ce repo sur GitHub
2. Cree les secrets ci-dessus
3. Lance le workflow manuellement une premiere fois
4. Verifie votre domaine

## 6) Si le deploiement echoue

- Test 1: remplace protocol: ftps par protocol: ftp dans le workflow
- Test 2: confirme le bon dossier cible (/public_html/)
- Test 3: verifie les identifiants FTP dans Hostinger

## 7) Cycle de travail ensuite

1. Modifie localement
2. git add .
3. git commit -m "Update site"
4. git push origin main

Le deploiement se fait automatiquement.
