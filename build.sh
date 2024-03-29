if [ -f "policy.jar" ]; then
  rm policy.jar
fi
jar cf policy.jar META-INF policy.js
