# NS-B Experiment Lab

A static, AI-assisted research prototype for inspecting a limited Navier–Stokes certificate, with separate finite-time solver and comparison demonstrations.

- Lab: https://lab.rmwalke.com
- Paper DOI: https://doi.org/10.5281/zenodo.23429477
- Exact-rational Python audit: https://github.com/Rmwalke/nsb-open-certificate-check

The browser certificate experiment makes 17 invariance and 17 third-iterate entry comparisons using exact BigInt fractions. Decimal values are display-only. It uses a derived input snapshot and assumes the imported analytic bounds are valid: **browser PASS is not the full PASS_DATA_ONLY result**. It is not a proof of the PDE theorem, independent peer review, or a novelty assessment. The separate solver and comparison pages retain their stated numerical-method and certificate limitations.

All static files are at this repository root, with their asset subdirectories preserved. GitHub Pages should publish from `main` / `/(root)`. No external build step is needed. `CNAME` names the intended custom domain; its inclusion alone does not activate hosting, DNS or HTTPS.

`NSB-exact-experiment.json` is generated in the visitor's browser when they download a completed experiment. It is not a stored baseline result or a missing static dependency.

Research attribution: Rushikesh Murlidhar Walke. AI-assistance and scope disclosures remain on the site. The root MIT license covers the lab software; bundled research material retains its original attribution and applicable license notices. See the audit repository's `Code/LICENSE_SCOPE.txt` for the original publication's license scopes.
