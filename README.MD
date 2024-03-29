# Javascript Based policies in KEYCLOAK

To "build" the policy update the policy.js file as desired and run the build.sh file that simply jar <strong>META-INF</strong> folder with the <strong>policy.js</strong> file.
to change policy name simply go in <strong>META-INF/keycloak-script.json</strong> and replace the "name" field"

```
{
  "policies": [
    {
    "name": "My Best Policy Ever",
    "filename": "policy.js",
    "Description": "policy Description"
    }
  ]
}
```